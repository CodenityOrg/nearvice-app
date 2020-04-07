import React from 'react';
import Styled from './styles';

const Backdrop = (props) => (
  props.show ? <Styled.Backdrop onClick={props.clicked}></Styled.Backdrop> : null
);

export default Backdrop;