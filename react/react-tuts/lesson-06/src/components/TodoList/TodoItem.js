import React, { Component } from 'react'
const noop = () => {}
export default class TodoItem extends Component {
  handleCheckboxChange = () => {
    // this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)
    const {
      onCompeletedChange = noop,
      id
    } = this.props
    onCompeletedChange(id)
  }
  render() {
    const {
      isCompleted,
      title
    } = this.props
    return (
      <li>
        <input
          checked={isCompleted}
          onChange={this.handleCheckboxChange}
          type="checkbox"
        />
        <span>{title} {isCompleted ? '已完成' : '未完成'}</span>
      </li>
    )
  }
}
