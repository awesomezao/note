import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'

render(
  <Router>
    <Route component={App} />
  </Router>,
  document.querySelector('#root')
)