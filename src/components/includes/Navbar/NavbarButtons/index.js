import React from 'react';
import Styled from './styles';
import PropTypes from 'prop-types';

function NavbarButtons (props) {
  const { isAuth } = props;

  return (
      !isAuth ?
        <>
          <Styled.Button tabIndex="0" onClick={props.onLoginClick}>
            Login
          </Styled.Button>
          <Styled.MobileLink to={'/help'}>
            Help
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
