import React, { Component } from 'react';

class Header extends Component {

  _toggleSidebar = () => {
    let { state, setState } = this.props;

    setState({ showSidebar: !state.showSidebar });
  }

  render() {
    return (
      <header className="gradient">
        <i className="fa fa-bars" aria-hidden="true" onClick={ () => this._toggleSidebar() }/>
        <h1>TYPOGRAPHY</h1>
      </header>
    );
  }

}

export default Header;
