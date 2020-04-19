
import React from 'react';
import Styled from './styles';

export default props => {
    return <Styled.Button {...props}>{props.children}</Styled.Button>;
}