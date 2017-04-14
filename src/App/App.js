import React, { Component } from 'react';

import 'app/css/reset.css';
import 'app/css/layout.css';
import 'app/css/style.css';
import 'app/css/media.css';

import Main from 'app/views/Main';
import Header from 'app/views/Header';
import Sidebar from 'app/views/Sidebar';

class App extends Component {

  constructor() {
    super();

    this.state = {
      sidebar: false
    };
  }

  sidebarToggle = () => {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    return (
      <div className="App">
        <Header sidebarToggle = { () => this.sidebarToggle() }/>
        <div className="container">
          <Sidebar show={ this.state.sidebar }/>
          <Main />
        </div>
      </div>
    );
  }

}

export default App;
