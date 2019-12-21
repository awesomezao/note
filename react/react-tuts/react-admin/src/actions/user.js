import actionTypes from './actionTypes'
import { loginRequest } from '../requests'

const startLogin = () => {
  return {
    type: actionTypes.START_LOGIN
  }
}

const loginSuccess = (userInfo) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: {
      userInfo
    }
  }
}

const loginFailed = () => {
  window.localStorage.removeItem('authToken')
  window.sessionStorage.removeItem('authToken')
  window.localStorage.removeItem('userInfo')
  window.sessionStorage.removeItem('userInfo')
  return {
    type: actionTypes.LOGIN_FAILED
  }
}

export const changeAvatar = (avatarUrl) => {
  return {
    type: actionTypes.CHANGE_AVATAR,
    payload: {
      avatarUrl
    }
  }
}

export const logout = () => {
  return dispatch => {
    // 实际的项目中，在这里要告诉服务端用户退出
    dispatch(loginFailed())
  }
}

export const login = (userInfo) => {
  return dispatch => {
    dispatch(startLogin())
    loginRequest(userInfo)
      .then(resp => {
        if (resp.data.code === 200) {
          const {
            authToken,
            ...userInfo
          } = resp.data.data
          if (userInfo.remember === true) {
            window.localStorage.setItem('authToken', authToken)
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
          } else {
            window.sessionStorage.setItem('authToken', authToken)
            window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
          }
          dispatch(loginSuccess(resp.data.data))
        } else {
          dispatch(loginFailed())
        }
      })
  }
}