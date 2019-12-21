import { combineReducers } from 'redux'

import notifications from './notifications'
import user from './user'

export default combineReducers({
  notifications,
  user
})
