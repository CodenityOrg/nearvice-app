import React from 'react';
import Styled from './styles';
import NavbarButtons from '../Navbar/NavbarButtons/index';
import Backdrop from '../../basics/Backdrop/index';
import Logo from '../../basics/Logo/index';
import SpecialistCTA from '../SpecialistCTA/index';
import PropTypes from 'prop-types';

const SideDrawer = (props) => {
  const {isOpen} = props;
  const navRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen) {
      navRef.current.focus();
    } else {
      document.activeElement.blur()
    }
  }, [isOpen])

  return (
    <>
      <Backdrop show={isOpen} clicked={props.handleClose} />
      <Styled.SideDrawer isOpen={isOpen} onClick={props.handleClose}>
        <Styled.Logo to={'/'}>
          <Logo />
        </Styled.Logo>
        <Styled.Nav tabIndex="0" ref={navRef}>
          <NavbarButtons
            onLoginClick={props.onLoginClick}
            isAuth={props.isAuth}
          />
        </Styled.Nav>
        {
          !props.isAuth &&
          <Styled.Bottom>
            <SpecialistCTA onClick={props.onSpecialistRegisterClick } />
          </Styled.Bottom>
        }
      </Styled.SideDrawer>
    </>
  );
};

SideDrawer.propTypes = {
  isAuth: PropTypes.bool,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  onLoginClick: PropTypes.func,
  onSpecialistRegisterClick: PropTypes.func
};

const areEqual = (prevProps, nextProps) => prevProps.isOpen === nextProps.isOpen

export default React.memo(SideDrawer, areEqual);