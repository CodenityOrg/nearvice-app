import React from 'react';
import PropTypes from 'prop-types'

class Navbar extends React.Component {
  render() {
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}

Navbar.propTypes = {
  title: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'Nearvice'
}

export default Navbar;
