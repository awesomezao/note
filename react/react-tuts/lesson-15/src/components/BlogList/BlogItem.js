import React from 'react'
// 实际上这是一个展示组件（Dumb/Presentational Components）
export default function BlogItem(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </li>
  )
}
