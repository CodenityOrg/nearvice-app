import React from 'react';
import styled from 'styled-components';

const baseStyles = `
    background: #FDFDFD 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 20px #0000001A;
    border-radius: 8px;
    opacity: 1;
    text-align: left;
    font-size: 12px;
    font-family: Lato;
    letter-spacing: 0;
    width: 270px;
    height: 35px;
`;

const StyledInput = styled.input`${baseStyles}`;

export default props => {
    return <StyledInput 
        {
            ...props
        }
    />;
};