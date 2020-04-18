import React from 'react';
import Styled from './styles';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

function NavbarButtons (props) {
  const { isAuth } = props;
  const { t } = useTranslation();
  const helpMessage = t('navigation.links.help');
  const contactButton = (
    <Styled.ButtonLinkLeft tabIndex="0" to={'/contact'}>
      {t('navigation.links.contact')}
    </Styled.ButtonLinkLeft>
  );

  return (
    <>
      {!props.vertical && contactButton}
      {
        !isAuth ?
        <>
          <Styled.Button tabIndex="0" onClick={props.onSignInClick}>
            Sign In
          </Styled.Button>
          <Styled.Button highlighted tabIndex="0" onClick={props.onSignUpClick}>
            Sign Up
          </Styled.Button>
            <Styled.ButtonLinkMobile to={'/help'}>
            {helpMessage}
            </Styled.ButtonLinkMobile>
        </>
      :
        <Styled.User>
          <Styled.Avatar src={props.user.profilePicture} alt={props.user.name} />
          {props.user.name}
        </Styled.User>
      }
      {props.vertical && contactButton}
    </>
  )
}

NavbarButtons.defaultProps = {
  isAuth: false
}

NavbarButtons.propTypes = {
  isAuth: PropTypes.bool,
  user: PropTypes.object,
  onSignInClick: PropTypes.func,
  onSignUpClick: PropTypes.func
};

export default NavbarButtons;
