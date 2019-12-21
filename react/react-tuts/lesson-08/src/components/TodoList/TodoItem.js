import React, { Component } from 'react'
const noop = () => {}
export default class TodoItem extends Component {
  // 老版本的坑：constructor里面通过props来初始化了一个state, 在props修改之后，这个state不会再次更新
  // constructor (props) {
  //   super()
  //   this.state = {
  //     completedText: props.completed ? '完成' : '未完成'
  //   }
  // }
  // 那么就需要借助于componentWillReceiveProps来做一次修正
  // UNSAFE_componentWillReceiveProps (nextProps) {
  //   this.setState({
  //     completedText: nextProps.completed ? '完成' : '未完成'
  //   })
  // }

  constructor () {
    super()
    this.state = {
      completedText: ''
    }
  }
  static getDerivedStateFromProps (props) {
    return {
      completedText: props.completed ? '完成' : '未完成'
    }
  }

  handleCheckboxChange = () => {
    // this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)
    const {
      onCompeletedChange = noop,
      id
    } = this.props
    onCompeletedChange(id)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.completed !== this.props.completed
  }

  render() {
    console.log(`TodoItem ${this.props.title} render`)
    const {
      completed,
      title
    } = this.props
    return (
      <li>
        <input
          checked={completed}
          onChange={this.handleCheckboxChange}
          type="checkbox"
        />
        <span>{title} {this.state.completedText}</span>
      </li>
    )
  }
}

// import React, { PureComponent } from 'react'
// const noop = () => {}
// export default class TodoItem extends PureComponent {
//   handleCheckboxChange = () => {
//     // this.props.onCompeletedChange && this.props.onCompeletedChange(this.props.id)
//     const {
//       onCompeletedChange = noop,
//       id
//     } = this.props
//     onCompeletedChange(id)
//   }
//   render() {
//     console.log(`TodoItem ${this.props.title} render`)
//     const {
//       completed,
//       title
//     } = this.props
//     return (
//       <li>
//         <input
//           checked={completed}
//           onChange={this.handleCheckboxChange}
//           type="checkbox"
//         />
//         <span>{title} {completed ? '已完成' : '未完成'}</span>
//       </li>
//     )
//   }
// }

