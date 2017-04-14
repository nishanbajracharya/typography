import React from 'react';
import ReactDOM from 'react-dom';

import App from 'app';
import Store from 'app/store';

ReactDOM.render(
  <Store>
    <App />
  </Store>,
  document.getElementById('root')
);
