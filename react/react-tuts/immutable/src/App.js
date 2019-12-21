import React, { Component } from 'react'
import {
  CounterBtn,
  CounterDisplay
} from './components'
import { connect } from 'react-redux'
import { increment, decrement } from './actions/counter'

class App extends Component {
  render() {
    return (
      <>
        <CounterBtn onClick={this.props.decrement}>-</CounterBtn>
        <CounterDisplay />
        <CounterBtn onClick={this.props.increment}>+</CounterBtn>
      </>
    )
  }
}

export default connect(null, { increment, decrement })(App)
