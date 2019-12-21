import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
// ConfigProvider 目前还不成熟
// https://github.com/ant-design/ant-design/issues?utf8=%E2%9C%93&q=ConfigProvider
import { LocaleProvider, ConfigProvider } from 'antd'
import App from './App';

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  document.getElementById('root')
)