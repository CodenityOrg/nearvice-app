import React, {useState} from 'react';

import Login from './Login';
import Logo from './Login/logo-login.png';

import Modal from 'react-modal';

// TODO: Change default modal for nearvice custom modal
export default (props) => {

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            padding               : '0',
            transform             : 'translate(-50%, -50%)'
        }
    };
/*
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }*/
    return (
        <div>
            {/*<button onClick={openModal}>Open Modal</button>*/}
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Login>
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
                            <Login.Input placeholder="Email" />
                            <Login.Input placeholder="Password" />
                        </Login.Signin>
                        <Login.Button
                            as="a"
                            href="#"
                        >
                            Login
                        </Login.Button>
                    </Login.LoginSection>
                </Login>
            </Modal>
        </div>
    );
};