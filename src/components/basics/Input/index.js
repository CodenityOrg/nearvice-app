import React from 'react';
import Styled from './styles';

const Input = props => {
    return <Styled.Input 
        {
            ...props
        }
    />;
};

export default Input;