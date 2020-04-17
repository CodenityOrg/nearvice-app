import React from 'react';

import Login from './Login';
import Logo from './Login/logo-login.png';

import Modal from 'react-modal';

import ErrorMessage from './basics/ErrorMessage/index';

import useBoolToggler from '../hooks/boolToggler';
import useInputField from '../hooks/inputField';

// TODO: Change default modal for nearvice custom modal
export default (props) => {
    const { isOpen } = props;
    const [hasErrorMessage, setErrorMessageTrue, setErrorMessageFalse] = useBoolToggler();
    const emailInput = useInputField('');
    const passwordInput = useInputField('');

    React.useEffect(() => {
        if (!isOpen) {
            setErrorMessageFalse();
            emailInput.reset();
            passwordInput.reset();
        }
    }, [isOpen]);

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            padding               : '0',
            transform             : 'translate(-50%, -50%)',
            overflow              : 'visible'
        }
    };

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
        // TODO implement login
    };
    
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Login>
                    <ErrorMessage
                        show={hasErrorMessage}
                        message="Something went wrong! Please try again more later"

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
                            <Login.Input hasError={passwordInput.errorData.value} {...passwordInput.fieldData} type="password" placeholder="Password" />
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