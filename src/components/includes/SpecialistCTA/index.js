import React from 'react';
import Styled from './styles';
import LinkBase from '../../basics/LinkBase/index';
import PropTypes from 'prop-types';
import ToolBoxImage from './tool-box.png';

import { useTranslation } from 'react-i18next';

const SpecialistCTA = () => {
  const { t } = useTranslation();
  const titleMessage = t('navigation.specialistCTA.title');
  const ctaMessage = t('navigation.specialistCTA.cta');
  
  return (
    <Styled.Container>
      <div>
        <Styled.Image src={ToolBoxImage} />
      </div>
      <div>
        <Styled.Title>
          {titleMessage}
        </Styled.Title>
        <LinkBase to={'/'}>
          {ctaMessage}
        </LinkBase>
      </div>
    </Styled.Container>
  )
}

SpecialistCTA.propTypes = {
  onClick: PropTypes.func
};

export default SpecialistCTA;