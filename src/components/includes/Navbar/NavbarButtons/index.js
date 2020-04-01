import React from 'react';
import Styled from './styles';
import PropTypes from 'prop-types';

function NavbarButtons (props) {
  const { isAuth } = props;

  return (
    <div>
      {
        !isAuth ?
          <Styled.Link onClick={props.onLoginClick}>
            Login
          </Styled.Link>
        :
          <Styled.User>
            <Styled.Avatar src={props.user.profilePicture} alt={props.user.name} />
            {props.user.name}
          </Styled.User>
      }
    </div>
  )
}

NavbarButtons.defaultProps = {
  isAuth: false
}

NavbarButtons.propTypes = {
  isAuth: PropTypes.bool,
  user: PropTypes.object
};

export default NavbarButtons;
