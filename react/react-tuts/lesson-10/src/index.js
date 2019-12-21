import React from 'react'
import { render } from 'react-dom'
import { CounterProvider } from './counterStore'
import App from './App'

render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.querySelector('#root')
)