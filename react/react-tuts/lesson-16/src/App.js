import React, { Component } from 'react'
import { Route, NavLink as Link, Redirect, Switch } from 'react-router-dom'
import {
  Artical,
  ArticalDetail,
  Home,
  Users,
  NotFound
} from './views'
export default class App extends Component {
  state={
    isLogin: false
  }
  render () {
    return (
      <div>
        <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/artical">文章</Link></li>
          <li><Link to="/users">用户</Link></li>
        </ul>
        <Switch>
          <Route component={Home} path="/home"/>
          <Route component={Artical} path="/artical" exact />
          <Route component={ArticalDetail} path="/artical/:id" />
          <Route path="/users" render={(routeProps) => {
            return this.state.isLogin ? <Users {...routeProps} /> : <div>请登录</div>
          }} />
          <Route component={NotFound} path="/404" />
          <Redirect to="/home" from="/" exact />
          <Redirect to="/404" />
        </Switch>
      </div>
    )
  }
}
