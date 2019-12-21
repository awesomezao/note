import React, { Component } from 'react'
import { render } from 'react-dom'

// 定义组件的第二种方式，使用类继承React.Component
class App extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <h1>类组件!!!</h1>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
// 类组件渲染的原理
// const app = new App({
//   desc: '类组件是继承React.Component的'
// }).render()

// render是react dom提供的一个方法，这个方法通常只会用一次
render(
  <App desc="类组件是继承React.Component的" />,
  document.querySelector('#root')
)

// 在react16以前，使用这种方式来创建一个类组件
// React.createClass({
//   render () {
//     return <h1>xxxx</h1>
//   }
// })
