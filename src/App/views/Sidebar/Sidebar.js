import React, { Component } from 'react';

class Sidebar extends Component {

  changeFont = (index) => {
    let { setState } = this.props;

    setState({ activeFont: index });
  }

  render() {
    let { state } = this.props;

    return (
      <div className={ `sidebar ${ state.showSidebar ? 'sidebar-display' : '' }` }>
        <div className="font-selection">
          <h2>FONTS</h2>
          {
            state.fonts.map((font, index) => <div key={ index } className={ `font-item ${ state.activeFont === index ? 'selected-font' : '' } ${ state.fonts[index].class }` } onClick={ () => this.changeFont(index) }>
              <p>{ font.name }</p>
            </div>)
          }
        </div>
      </div>
    );
  }

}

export default Sidebar;
