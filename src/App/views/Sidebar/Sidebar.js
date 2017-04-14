import React, { Component } from 'react';

class Sidebar extends Component {

  render() {
    let { state } = this.props;

    return (
      <div className={ `sidebar ${ state.showSidebar ? 'sidebar-display' : '' }` }></div>
    );
  }

}

export default Sidebar;
