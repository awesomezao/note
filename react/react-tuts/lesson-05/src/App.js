import React, { Component, Fragment } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList
} from './components'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </Fragment>
      // <>
      //   <TodoHeader />
      //   <TodoInput />
      //   <TodoList />
      // </>
    )
  }
}
