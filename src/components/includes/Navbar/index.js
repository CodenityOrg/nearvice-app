import React from 'react';
import Styled from './styles';
import Logo from '../../basics/Logo/index';
import PropTypes from 'prop-types'

function Navbar (props) {
  return (
    <Styled.Navbar>
      <Styled.MenuButton onClick={props.toggleDrawer}>
        <Styled.MenuButtonLine/>
        <Styled.MenuButtonLine/>
        <Styled.MenuButtonLine/>
      </Styled.MenuButton>
      <Styled.Brand to={'/'}>
        <Logo />
      </Styled.Brand>
      <Styled.Children>
        {props.children}
      </Styled.Children>
    </Styled.Navbar>
  )
}

Navbar.propTypes = {
  toggleDrawer: PropTypes.func
}

export default Navbar;
