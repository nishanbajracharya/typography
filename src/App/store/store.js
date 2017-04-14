import React, { Component } from 'react';

class Store extends Component {

  constructor() {
    super();

    this.state = {
      showSidebar: false,
      showFontList: true,
      activeFont: 0,
      fonts: [
        {
          name: 'Open Sans',
          class: 'f-open-sans'
        },
        {
          name: 'Roboto',
          class: 'f-roboto'
        },
        {
          name: 'Merriweather',
          class: 'f-merriweather'
        },
        {
          name: 'Noto Serif',
          class: 'f-noto-serif'
        },
        {
          name: 'Lobster Two',
          class: 'f-lobster-two'
        },
        {
          name: 'Abril Fatface',
          class: 'f-abril-fatface'
        }
      ],
      showRatioList: true,
      activeRatio: 0,
      ratios: [
        {
          name: 'Major Third',
          value: '4:5',
          class: 'ratio-major-third'
        },
        {
          name: 'Perfect Fourth',
          value: '3:4',
          class: 'ratio-perfect-fourth'
        },
        {
          name: 'Golden Ratio',
          value: '1:1.618',
          class: 'ratio-golden-ratio'
        }
      ]
    };
  }

  _setState = (props) => {
    this.setState(props);
  }

  render() {
    let _state = this.state;

    return (
      <div className="store">
        { React.Children.map(this.props.children, child => React.cloneElement(child, { state: _state, setState: this._setState }))}
      </div>
    );
  }

}

export default Store;
