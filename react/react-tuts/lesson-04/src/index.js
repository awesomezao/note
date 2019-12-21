import React, { Component } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'
import './index.css'

const Title = styled.h1`
  color: #F00
`

class App extends Component {
  render () {
    const style = { color: '#F00' }
    return (
      <div>
        <Title>元素中的样式</Title>
        <ol>
          <li style={style}>使用style内联创建</li>
          <li className="has-text-red">使用class的方式，但是在react里class要写成className</li>
          <li
            className={classNames('a', { 'b': true, 'c': false })}
          >要动态添加不同的className就可以使用第三方的包叫classNames, 比如这个li标签上就只有a,b， 没有c</li>
          <li>styled-components的使用</li>
        </ol>
      </div>
    )
  }
}

render(
  <App />,
  document.querySelector('#root')
)
