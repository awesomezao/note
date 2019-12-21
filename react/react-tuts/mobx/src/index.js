import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import App from './App';

import counterStore from './store'

ReactDOM.render(
  <Provider counter={counterStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
