import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        <TodoItem />
      </ul>
    )
  }
}
