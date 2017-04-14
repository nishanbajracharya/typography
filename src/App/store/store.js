import React, { Component } from 'react';

class Store extends Component {

  constructor() {
    super();

    this.state = {
      showSidebar: false
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
