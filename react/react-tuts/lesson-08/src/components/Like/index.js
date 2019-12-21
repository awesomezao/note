import React, { Component } from 'react'

export default class Like extends Component {
  constructor () {
    super()
    this.state = {
      isLiked: false
    }
  }
  
  handleLikedClick = () => {
    this.setState((prevState) => {
      return {
        isLiked: !prevState.isLiked
      }
    })
  }

  render() {
    return (
      <div>
        <span onClick={this.handleLikedClick}>
          {
            this.state.isLiked ? '取消 ❤️' : '喜欢 🖤'
          }
        </span>
      </div>
    )
  }
}
