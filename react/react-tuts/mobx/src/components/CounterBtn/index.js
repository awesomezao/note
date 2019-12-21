import React, { Component } from 'react'

export default class CounterBtn extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>{this.props.children}</button>
    )
  }
}
