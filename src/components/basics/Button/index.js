
import React from 'react';
import Styled from './styles';

export default props => {
    const {icon} = props;
    return <Styled.Button>{props.children}</Styled.Button>;
}