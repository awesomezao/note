import React, { Component } from 'react'

import {
  inject,
  observer
} from 'mobx-react'
import {
  CounterBtn,
  CounterDisplay
} from './components'

@inject('counter')
@observer
class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <CounterBtn onClick={this.props.counter.decrement}>-</CounterBtn>
        <CounterDisplay />
        <CounterBtn onClick={this.props.counter.increment}>+</CounterBtn>
      </div>
    )
  }
}

export default App
