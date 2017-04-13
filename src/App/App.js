import React, { Component } from 'react';

import 'app/css/reset.css';
import 'app/css/layout.css';
import 'app/css/style.css';
import 'app/css/media.css';

import Main from 'app/views/Main';
import Header from 'app/views/Header';
import SidebarLeft from 'app/views/SidebarLeft';
import SidebarRight from 'app/views/SidebarRight';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <SidebarLeft />
          <Main />
          <SidebarRight />
        </div>
      </div>
    );
  }

}

export default App;
