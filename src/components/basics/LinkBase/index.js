import React from 'react';
import Styled from './styles';

const LinkBase = props => {
  return (
    <Styled.LinkBase {...props} >
      {props.children}
    </Styled.LinkBase>
  );
}

export default LinkBase;