import React from 'react';
import Styled from './styles';
import PropTypes from 'prop-types';

const Backdrop = (props) => (
  props.show ? <Styled.Backdrop onClick={props.clicked}></Styled.Backdrop> : null
);

Backdrop.propTypes = {
  show: PropTypes.bool,
  clicked: PropTypes.func,
};

export default Backdrop;