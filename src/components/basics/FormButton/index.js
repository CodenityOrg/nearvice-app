
import React from 'react';
import Styled from './styles';
import PropTypes from 'prop-types';

const FormButton = props => {
    return <Styled.Button {...props}>{props.children}</Styled.Button>;
};

FormButton.propTypes = {
    children: PropTypes.string,
};

export default FormButton;