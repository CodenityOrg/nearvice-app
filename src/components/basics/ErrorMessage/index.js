import React from 'react';
import Styled from './styles';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
  return <Styled.ErrorMessage {...props} >{props.message}</Styled.ErrorMessage>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  show: PropTypes.bool
};

ErrorMessage.defaultProps = {
  show: false
};

export default ErrorMessage;
