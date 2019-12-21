import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import zhCN from 'antd/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'antd'

import App from './App'
import store from './store'
import { mainRoutes } from './routes'

import './index.less'

render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <Router>
        <Switch>
          <Route path="/admin" component={App} />
          {
            mainRoutes.map(route => {
              return <Route key={route.pathname} path={route.pathname} component={route.component} />
            })
          }
          <Redirect to="/admin" from="/" exact />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.querySelector('#root')
)