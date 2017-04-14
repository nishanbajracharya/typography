import React, { Component } from 'react';

class Store extends Component {

  constructor() {
    super();

    this.state = {
      showSidebar: false,
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
        }
      ],
      activeRatio: 0,
      ratios: [
        {
          name: 'Perfect Fourth',
          value: '3/4',
          class: 'ratio-perfect-fourth'
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
