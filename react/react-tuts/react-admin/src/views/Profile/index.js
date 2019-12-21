import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Card, Upload, Spin } from 'antd'

import axios from 'axios'

import { changeAvatar } from '../../actions/user'

const mapState = state => ({
  avatarUrl: state.user.avatar
})

@connect(mapState, { changeAvatar })
class Profile extends Component {
  state = {
    isUploading: false
  }

  handleUploadAvatar = ({ file }) => {
    const data = new FormData()
    data.append('Token', 'f3e04ae2b3d6170f38b26bdb01aadb060dd703a5:KjnR4glpLWbREcxkdRaYc-8ZaqY=:eyJkZWFkbGluZSI6MTU1ODkzODY3NywiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNjgxOTQ2IiwiYWlkIjoiMTU3MDMzMCIsImZyb20iOiJmaWxlIn0=')
    data.append('file', file)
    this.setState({
      isUploading: true
    })
    axios.post('http://up.imgapi.com/', data)
      .then(resp => {
        if (resp.status === 200) {
          this.setState({
            isUploading: false
          })
          this.props.changeAvatar(resp.data.linkurl)
        } else {
          // 自行处理错误
        }
      })
      .catch(error => {
        // 自行处理错误
      })
  }
  render() {
    return (
      <Card
        title="个人设置"
        bordered={false}
      >
        <Upload
          style={{
            border: '1px dashed #dedede',
            width: 80,
            height: 80,
            display: 'block'
          }}
          showUploadList={false}
          customRequest={this.handleUploadAvatar}
        >
          <Spin
            spinning={this.state.isUploading}
          >
            {
              this.props.avatarUrl ? <img style={{width: 78, height: 78}} src={this.props.avatarUrl} alt="头像" /> : <span>点击上传</span>
            }
          </Spin>
        </Upload>
      </Card>
    )
  }
}

export default Profile