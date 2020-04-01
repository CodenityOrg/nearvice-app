import React from 'react';
import Styled from './styles';
import PropTypes from 'prop-types'

function Navbar (props) {
  return (
    <Styled.Navbar>
      <Styled.MenuButton>
        <Styled.MenuButtonLine/>
        <Styled.MenuButtonLine/>
        <Styled.MenuButtonLine/>
      </Styled.MenuButton>
      <Styled.Brand to={'/'}>
        {props.title}
      </Styled.Brand>
      <Styled.Children>
        {props.children}
      </Styled.Children>
    </Styled.Navbar>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Nearvice'
}

export default Navbar;
