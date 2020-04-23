import React from 'react';

import Login from './Login';
import Logo from './Login/logo-login.png';

import Modal from './basics/Modal';

import ErrorMessage from './basics/ErrorMessage/index';

import useBoolToggler from '../hooks/boolToggler';
import useInputField from '../hooks/inputField';

import { login } from '../api';

export default (props) => {
    const { isOpen } = props;
    const [hasErrorMessage, setErrorMessageTrue, setErrorMessageFalse] = useBoolToggler();
    const emailInput = useInputField();
    const passwordInput = useInputField('password');

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
    
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={props.closeModal}
            >
                <Login>
                    <ErrorMessage
                        show={hasErrorMessage}
                        message="Something went wrong! Please try again later"
                        onClick={setErrorMessageFalse}
                    />
                    <Login.AdSection>
                        <Login.Image
                            width="150"
                            src={Logo}
                        />
                        <Login.Text>
                            Let's find the best specialist for you
                        </Login.Text>
                    </Login.AdSection>
                    <Login.LoginSection>
                        <Login.OAuth>
                            <Login.OAuthButton>Log in with Facebook</Login.OAuthButton>
                            <Login.OAuthButton>Sign in with Google</Login.OAuthButton>
                        </Login.OAuth>
                        <Login.Signin>
                            <Login.Input hasError={emailInput.errorData.value} {...emailInput.fieldData} placeholder="Email" />
                            <Login.Input hasError={passwordInput.errorData.value} {...passwordInput.fieldData} placeholder="Password" />
                        </Login.Signin>
                        <Login.Button
                            as="a"
                            onClick={handleLogin}
                        >
                            Login
                        </Login.Button>
                    </Login.LoginSection>
                </Login>
            </Modal>
        </>
    );
};