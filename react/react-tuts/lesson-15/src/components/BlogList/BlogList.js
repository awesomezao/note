import React, { Component } from 'react'
import { connect } from 'react-redux'
import BlogItem from './BlogItem'
import { fetchBlogList } from '../../actions/blog'

// 实际上这是一个容器组件（Smart/Container Components）
class BlogList extends Component {
  componentDidMount() {
    this.props.fetchBlogList()
  }
  // 这里还需要对传入的数据做检测 prop-types
  render() {
    const {
      list,
      isLoading,
      errMsg
    }  = this.props
    const hasError = Boolean(errMsg)
    return (
      isLoading
      ?
      <div>loading…</div>
      :
      (
        hasError
        ?
        <div>{errMsg}</div>
        :
        <ul>
          {
            list.map(blog => {
              return (
                <BlogItem key={blog.id} {...blog} />
              )
            })
          }
        </ul>
      )
    )
  }
}
const mapState = state => ({
  list: state.blog.list,
  isLoading: state.blog.isLoading,
  errMsg: state.blog.errMsg
})
export default connect(mapState, { fetchBlogList })(BlogList)
