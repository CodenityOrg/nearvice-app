import React from 'react';
import { useTranslation } from 'react-i18next';


import Login from '../Login';
import Logo from '../Login/logo-login.png';

import Modal from '../basics/Modal';

import ErrorMessage from '../basics/ErrorMessage/index';

import { login, loginbyGoogle } from '../../api';
import GoogleLogin from 'react-google-login';
import useBoolToggler from '../../hooks/boolToggler';
import useInputField from '../../hooks/inputField';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


const getPlaceholderTranslations = t => {
    const inputsName = ['email', 'password'];
    const placeholders = {};
    for (const inputName of inputsName) {
        placeholders[inputName] = t(`form.placeholder.${inputName}`)
    }
    return placeholders;
};

export default (props) => {
    const { isOpen } = props;
    const { t } = useTranslation();

    const [hasErrorMessage, setErrorMessageTrue, setErrorMessageFalse] = useBoolToggler();
    const emailInput = useInputField();
    const passwordInput = useInputField('password');

    const loginText = t('login');
    const slogan = t('login.slogan');
    const errorMessage = t('error.validation');
    const signInFb = t('Signin.Facebook');
    const signInGoogle = t('Signin.Google');
    const placeholders = getPlaceholderTranslations(t);

    React.useEffect(() => {
        if (!isOpen) {
            setErrorMessageFalse();
            emailInput.reset();
            passwordInput.reset();
        }
    }, [emailInput, isOpen, passwordInput, setErrorMessageFalse]);

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
    const responseFacebook = (response) => {
         console.log(response);
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
                            <FacebookLogin
                                appId={process.env.REACT_APP_DEV_FACEBOOK}
                                autoLoad={false}
                                callback={responseFacebook}
                                render={renderProps => (
                                     <Login.OAuthButton
                                     onClick={renderProps.onClick}>
                                         {signInFb}
                                      </Login.OAuthButton>
                                )}
                            />
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
                                        {signInGoogle}
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