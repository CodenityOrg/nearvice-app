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
                </Login.OAuth>
                <Login.Signin>
                    <Login.Input />
                    <Login.Input />
                </Login.Signin>
                <Login.Button>Login</Login.Button>
            </Login.LoginSection>
        </Login>
    );
};