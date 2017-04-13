import React, { Component } from 'react';

import 'app/css/reset.css';
import 'app/css/layout.css';
import 'app/css/style.css';
import 'app/css/media.css';

import Header from 'app/views/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hello World</h1>
      </div>
    );
  }

}

export default App;
