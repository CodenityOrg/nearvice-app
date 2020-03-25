import React from 'react';
import styled from 'styled-components';

import Input from './basics/Input';
import Button from './basics/Button';

const DivFormLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 310px;
    height: 332px;
    background: #E9E9E9 0% 0% no-repeat padding-box;
`;

const LoginContainer = styled.div`
    display: flex;
    flex: 1;
`;
const DivLoginAd = styled.div`
    width: 294px;
    height: 332px;
    background: #055E9D 0% 0% no-repeat padding-box;
`;

const StyledInput = styled(Input)`
    margin: 5px 20px;
`;

const DivSocialLogin = styled.div`
    width: 310px;
    height: 138px;
    background: #2993DE 0% 0% no-repeat padding-box;
    opacity: 1;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 26px 0px;
`;

const StyledButton = styled(Button)`
    margin: 36px;
`;

export default () => {
    return (
        <LoginContainer>
            <DivLoginAd>
            </DivLoginAd>
            <DivFormLogin>
                <DivSocialLogin></DivSocialLogin>
                <StyledForm>
                    <StyledInput placeholder="Email" />
                    <StyledInput placeholder="Password" />
                    <StyledButton>Login</StyledButton>
                </StyledForm>
            </DivFormLogin>
        </LoginContainer>
    )
};