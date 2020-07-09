
import React from 'react';
import Styled from './styles';
import PropTypes from 'prop-types';

const Button = props => {
    return <Styled.Button>{props.children}</Styled.Button>;
}

Button.propTypes = {
    children: PropTypes.string,
};

export default Button;