
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    height: 54px;
    margin-top: 36px;
`


export default (props) => {

    const {icon} = props;
    return <StyledButton>{props.children}</StyledButton>;
}