import React, { Component } from 'react'
import { BackHome } from '../../components'
export default class ArticalDetail extends Component {
  // goHome = () => {
  //   // this.props.history.push('/home')
  //   this.props.history.push({
  //     pathname: '/home',
  //     state: {
  //       id: this.props.match.params.id
  //     }
  //   })
  // }
  render() {
    return (
      <div>
        文章详情 {this.props.match.params.id}
        <BackHome />
      </div>
    )
  }
}
