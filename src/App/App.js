import React, { Component } from 'react';

import 'app/css/reset.css';
import 'app/css/App.css';

import Header from 'app/views/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello</h1>
      </div>
    );
  }

}

export default App;
