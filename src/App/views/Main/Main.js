import React, { Component } from 'react';

class Main extends Component {

  render() {
    let { state } = this.props;

    return (
      <div className="main">
        <div className={ `page ${ state.fonts[state.activeFont].class } ${ state.ratios[state.activeRatio].class }` }>
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>
        </div>
      </div>
    );
  }

}

export default Main;
