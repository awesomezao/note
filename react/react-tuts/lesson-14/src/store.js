// createStore是redux提供的一个用于创建store的方法，这个原理里已经讲到过
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

// 引入全并后的reducer
import rootReducer from './reducers'

// createStore的第一个参数必须是一个reducer，如果是多个，请在reducers目录下先使用combineReducers全并之后再导出
export default createStore(
  rootReducer,
  applyMiddleware(thunk)
)