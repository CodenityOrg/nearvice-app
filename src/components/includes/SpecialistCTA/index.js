import React from 'react';
import Styled from './styles';
import LinkBase from '../../basics/LinkBase/index';
import PropTypes from 'prop-types';
import ToolBoxImage from './tool-box.png'

const SpecialistCTA = () => {
  return (
    <Styled.Container>
      <div>
        <Styled.Image src={ToolBoxImage} />
      </div>
      <div>
        <Styled.Title>
          Are you a specialist?
        </Styled.Title>
        <LinkBase to={'/'}>
          Start here
        </LinkBase>
      </div>
    </Styled.Container>
  )
}

SpecialistCTA.propTypes = {
  onClick: PropTypes.func
};

export default SpecialistCTA;