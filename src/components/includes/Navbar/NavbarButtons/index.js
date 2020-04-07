import React from 'react';
import Styled from './styles';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

function NavbarButtons (props) {
  const { isAuth } = props;
  const { t } = useTranslation();
  const helpMessage = t('navigation.links.help');

  return (
      !isAuth ?
        <>
          <Styled.Button tabIndex="0" onClick={props.onLoginClick}>
            Login
          </Styled.Button>
          <Styled.MobileLink to={'/help'}>
            {helpMessage}
          </Styled.MobileLink>
        </>
      :
        <Styled.User>
          <Styled.Avatar src={props.user.profilePicture} alt={props.user.name} />
          {props.user.name}
        </Styled.User>
  )
}

NavbarButtons.defaultProps = {
  isAuth: false
}

NavbarButtons.propTypes = {
  isAuth: PropTypes.bool,
  user: PropTypes.object,
  onLoginClick: PropTypes.func
};

export default NavbarButtons;
