import React from 'react';
import Styled from './styles';

export default props => {
    return <Styled.Input 
        {
            ...props
        }
    />;
};