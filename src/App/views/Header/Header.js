import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header className="gradient">
        <i className="fa fa-bars" aria-hidden="true" onClick={ () => this.props.sidebarToggle() }/>
        <h1>TYPOGRAPHY</h1>
      </header>
    );
  }

}

export default Header;
