import React from 'react';

import Login from './Login';

export default () => {
    return (
        <Login>
            <Login.AdSection>
                <Login.Image />
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
                <Login.Button>
                    Login
                </Login.Button>
            </Login.LoginSection>
        </Login>
    );
};