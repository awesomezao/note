import React, { Component, Fragment } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from './components'

import { getTodos } from './services'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '待办事项列表',
      desc: '今日事，今日毕',
      todos: [],
      isLoading: false
    }
  }

  getData = () => {
    this.setState({
      isLoading: true
    })
    getTodos()
      .then(resp => {
        console.log(resp)
        if (resp.status === 200) {
          this.setState({
            todos: resp.data
          })
        } else {
          // 处理错误
        }
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }

  componentDidMount () {
    this.getData()
  }

  addTodo = (todoTitle) => {
    const newTodos = [...this.state.todos]
    newTodos.push({
      id: Math.random(),
      title: todoTitle,
      completed: false
    })
    this.setState({
      todos: newTodos
    })
  }

  onCompeletedChange = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    })
  }

  render() {
    return (
      <Fragment>
        <TodoHeader
          desc={this.state.desc}
        >
          {this.state.title}
        </TodoHeader>
        <TodoInput
          addTodo={this.addTodo}
        />
        {
          this.state.isLoading
          ?
          <div>loading…</div>
          :
          <TodoList
            todos={this.state.todos}
            onCompeletedChange={this.onCompeletedChange}
          />
        }
        <Like />
      </Fragment>
    )
  }
}
