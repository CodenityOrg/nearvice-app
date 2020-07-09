import React from 'react';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';

import Login from '../Login';
import Logo from '../Login/logo-login.png';

import Modal from '../basics/Modal';

import ErrorMessage from '../basics/ErrorMessage/index';

import { login, loginbyGoogle } from '../../api';
import GoogleLogin from 'react-google-login';
import useBoolToggler from '../../hooks/boolToggler';
import useInputField from '../../hooks/inputField';

const getPlaceholderTranslations = t => {
    const inputsName = ['email', 'password'];
    const placeholders = {};
    for (const inputName of inputsName) {
        placeholders[inputName] = t(`form.placeholder.${inputName}`)
    }
    return placeholders;
};

const LoginModal = (props) => {
    const { isOpen } = props;
    const { t } = useTranslation();

    const [hasErrorMessage, setErrorMessageTrue, setErrorMessageFalse] = useBoolToggler();
    const emailInput = useInputField();
    const passwordInput = useInputField('password');

    const loginText = t('login');
    const slogan = t('login.slogan');
    const errorMessage = t('error.validation');
    const placeholders = getPlaceholderTranslations(t);

    React.useEffect(() => {
        if (!isOpen) {
            setErrorMessageFalse();
            emailInput.reset();
            passwordInput.reset();
        }
    }, [isOpen]);

    const handleLogin = () => {
        const emailVal = emailInput.fieldData.value.trim();
        const passVal = passwordInput.fieldData.value.trim();

        if (!emailVal || !passVal) {
            emailInput.errorData.checkError();
            passwordInput.errorData.checkError();
            setErrorMessageTrue();
            return;
        }
        emailInput.errorData.setHasErrorFalse();
        passwordInput.errorData.setHasErrorFalse();
        setErrorMessageFalse();
        login(emailVal, passVal)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
        // TODO: Redirect
    };
    
    const responseGoogle = async (googleSession) => {
        try {
            const {status, data} = await loginbyGoogle(googleSession.tokenId);
            if (status === 200) console.log(data)
        } catch (e) {console.log(e.message)}
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={props.closeModal}
            >
                <Login>
                    <ErrorMessage
                        show={hasErrorMessage}
                        message={errorMessage}
                        onClick={setErrorMessageFalse}
                    />
                    <Login.AdSection>
                        <Login.Image
                            width="150"
                            src={Logo}
                        />
                        <Login.Text>
                            {slogan}
                        </Login.Text>
                    </Login.AdSection>
                    <Login.LoginSection>
                        <Login.OAuth>
                            <Login.OAuthButton>Log in with Facebook</Login.OAuthButton>
                            <GoogleLogin
                                clientId={process.env.REACT_APP_LOCAL_GOOGLE_CLIENID}
                                onSuccess={responseGoogle}
                                onFailure={setErrorMessageTrue}
                                cookiePolicy={'single_host_origin'}
                                render={renderProps => (
                                    <Login.OAuthButton
                                      onClick={renderProps.onClick}
                                      disabled={renderProps.disabled}
                                    >
                                     Sign in with Google
                                    </Login.OAuthButton>
                                  )}
                            />
                        </Login.OAuth>
                        <Login.Signin>
                            <Login.Input hasError={emailInput.errorData.value} {...emailInput.fieldData} placeholder={placeholders.email} />
                            <Login.Input hasError={passwordInput.errorData.value} {...passwordInput.fieldData} placeholder={placeholders.password} />
                        </Login.Signin>
                        <Login.Button
                            as="a"
                            onClick={handleLogin}
                        >
                            {loginText}
                        </Login.Button>
                    </Login.LoginSection>
                </Login>
            </Modal>
        </>
    );
};

LoginModal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
};

export default LoginModal;
