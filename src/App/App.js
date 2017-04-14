import React, { Component } from 'react';

import 'app/css/reset.css';
import 'app/css/layout.css';
import 'app/css/style.css';
import 'app/css/media.css';

import Main from 'app/views/Main';
import Header from 'app/views/Header';
import Sidebar from 'app/views/Sidebar';

class App extends Component {

  render() {
    let _store = { state: this.props.state, setState: this.props.setState };

    return (
      <div className="App">
        <Header { ..._store } />
        <div className="container">
          <Sidebar show={ _store.state.showSidebar } { ..._store } />
          <Main { ..._store } />
        </div>
      </div>
    );
  }

}

export default App;
