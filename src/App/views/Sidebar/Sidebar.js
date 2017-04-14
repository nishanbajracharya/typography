import React, { Component } from 'react';

class Sidebar extends Component {

  changeFont = (index) => {
    let { setState } = this.props;

    setState({ activeFont: index });
  }

  changeRatio = (index) => {
    let { setState } = this.props;

    setState({ activeRatio: index });
  }

  toggleFontList = () => {
    let { state, setState } = this.props;

    setState({ showFontList: !state.showFontList });
  }

  toggleRatioList = () => {
    let { state, setState } = this.props;

    setState({ showRatioList: !state.showRatioList });
  }

  render() {
    let { state } = this.props;

    return (
      <div className={ `sidebar ${ state.showSidebar ? 'sidebar-display' : '' }` }>
        <div className="font-selection">
          <h2 className="clearfix" onClick={ () => this.toggleFontList() }>FONTS <i className={ `fa fa-${ state.showFontList ? 'arrow-up' : 'arrow-down' }` } aria-hidden="true" /></h2>
          <div className={ `font-list ${ state.showFontList ? 'show' : '' }` }>
          {
            state.fonts.map((font, index) => <div key={ index } className={ `font-item ${ state.activeFont === index ? 'selected-font' : '' } ${ state.fonts[index].class }` } onClick={ () => this.changeFont(index) }>
              <p>{ font.name }</p>
            </div>)
          }
          </div>
        </div>
        <div className="font-selection">
          <h2 className="clearfix" onClick={ () => this.toggleRatioList() }>RATIO <i className={ `fa fa-${ state.showRatioList ? 'arrow-up' : 'arrow-down' }` } aria-hidden="true" /></h2>
          <div className={ `font-list ${ state.showRatioList ? 'show' : '' }` }>
          {
            state.ratios.map((ratio, index) => <div key={ index } className={ `font-item ${ state.activeRatio === index ? 'selected-font' : '' } ${ state.ratios[index].class }` } onClick={ () => this.changeRatio(index) }>
              <p>{ `${ ratio.name } (${ ratio.value })` }</p>
            </div>)
          }
          </div>
        </div>
      </div>
    );
  }

}

export default Sidebar;
