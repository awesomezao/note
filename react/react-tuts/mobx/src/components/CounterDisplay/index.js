import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject((store) => {
  console.log(store)
  return {
    count: store.counter.count,
    doubleCount: store.counter.doubleCount
  }
})
@observer
class CounterDisplay extends Component {
  componentWillReact() {
    console.log('componentWillReact')
  }
  render() {
    return (
      <div>
        {/* <div>原值: {this.props.counterStore.count}</div>
        <div>2倍计算: {this.props.counterStore.doubleCount}</div> */}
        <div>原值: {this.props.count}</div>
        <div>2倍计算: {this.props.doubleCount}</div>
      </div>
    )
  }
}

export default CounterDisplay
