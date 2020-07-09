import React from 'react';
import Styled from './styles';
import PropTypes from 'prop-types';

const LinkBase = props => {
  return (
    <Styled.LinkBase {...props} >
      {props.children}
    </Styled.LinkBase>
  );
};

LinkBase.propTypes = {
  children: PropTypes.string,
};

export default LinkBase;