// react里面通过ref来获取组件或者dom元素，要使用ref之前必须先调用React.createRef方法来创建一个ref
import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string
  }
  static defaultProps = {
    btnText: '添加TODO'
  }
  constructor () {
    super()
    this.state = {
      inputValue: ''
    }
    // 在constructor里来创建ref
    this.inputDom = createRef()
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.currentTarget.value
    })
  }
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleAddClick()
    }
  }
  handleAddClick = () => {
    // 实际的项目中，这里还需要去对this.state.inputValue做验证，如果验证通过，再执行下面的方法
    if (this.state.inputValue === '') {
      return
    }
    this.props.addTodo(this.state.inputValue)
    this.setState({
      inputValue: ''
    }, () => {
      this.inputDom.current.focus()
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
          ref={this.inputDom}
        />
        <button onClick={this.handleAddClick}>{this.props.btnText}</button>
      </div>
    )
  }
}
