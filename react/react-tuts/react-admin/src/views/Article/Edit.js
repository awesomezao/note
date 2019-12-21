import React, { Component, createRef } from 'react'

import {
  Card,
  Button,
  Form,
  DatePicker,
  Input,
  Spin,
  message
} from 'antd'

import moment from 'moment'

import E from 'wangeditor'

import { getArticleById, saveArticle } from '../../requests'

import './edit.less'

const formItemLayout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 16
  }
}
@Form.create()
class Edit extends Component {
  constructor () {
    super()
    this.editorRef = createRef()
    this.state = {
      isLoading: false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = Object.assign({}, values, {
          createAt: values.createAt.valueOf()
        })
        this.setState({
          isLoading: true
        })
        // 在这里可以处理更多想要处理的逻辑
        saveArticle(this.props.match.params.id, data)
          .then(resp => {
            message.success(resp.msg)
            // 如果需要是要跳转
            this.props.history.push('/admin/article')
          })
          .finally(() => {
            this.setState({
              isLoading: false
            })
          })
      }
    })
  }
  initEditor = () => {
    this.editor = new E(this.editorRef.current)
    this.editor.customConfig.onchange = (html) => {
      // html 即变化之后的内容
      this.props.form.setFieldsValue({
        content: html
      })
    }
    this.editor.create()
  }
  componentDidMount() {
    this.initEditor()
    this.setState({
      isLoading: true
    })
    getArticleById(this.props.match.params.id)
      .then(resp => {
        const { id, ...data } = resp
        data.createAt = moment(data.createAt)
        this.props.form.setFieldsValue(data)
        this.editor.txt.html(data.content)
      })
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form
    return (
      <Card
        title="编辑文章"
        bordered={false}
        extra={<Button onClick={this.props.history.goBack}>取消</Button>}
      >
        <Spin spinning={this.state.isLoading}>
          <Form
            onSubmit={this.handleSubmit}
            {...formItemLayout}
          >
            <Form.Item
              label="标题"
            >
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: '标题是必填的'
                  }
                ]
              })(
                <Input
                  placeholder="标题"
                />,
              )}
            </Form.Item>
            <Form.Item
              label="作者"
            >
              {getFieldDecorator('author', {
                rules: [
                  {
                    required: true,
                    message: '作者是必填的'
                  }
                ],
              })(
                <Input
                  placeholder="admin"
                />,
              )}
            </Form.Item>
            <Form.Item
              label="阅读量"
            >
              {getFieldDecorator('amount', {
                rules: [
                  {
                    required: true,
                    message: '阅读量是必填的'
                  }
                ],
              })(
                <Input
                  placeholder="0"
                />,
              )}
            </Form.Item>
            <Form.Item
              label="发布时间"
            >
              {getFieldDecorator('createAt', {
                rules: [
                  {
                    required: true,
                    message: '时间是必须的'
                  }
                ],
              })(
                <DatePicker showTime placeholder="选择时间" />
              )}
            </Form.Item>
            <Form.Item
              label="内容"
            >
              {getFieldDecorator('content', {
                rules: [
                  {
                    required: true,
                    message: '内容是必须的'
                  }
                ],
              })(
                <div className="qf-editor" ref={this.editorRef} />
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Button type="primary" htmlType="submit">
                保存修改
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Card>
    )
  }
}
export default Edit