import actionTypes from './actionTypes'
import { getPosts } from '../services'
const startFetchBlogList = () => {
  return {
    type: actionTypes.START_FETCH_BLOG_LIST
  }
}

const fetchBlogListSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_BLOG_LIST_SUCCESS,
    payload
  }
}

const fetchBlogListFailed = () => {
  return {
    type: actionTypes.FETCH_BLOG_LIST_FAILED
  }
}

export const fetchBlogList = () => dispatch => {
  dispatch(startFetchBlogList())
  getPosts()
    .then(resp => {
      console.log(resp)
      if (resp.status === 200) {
        dispatch(fetchBlogListSuccess({
          list: resp.data
        }))
      } else {
        dispatch(fetchBlogListFailed())
      }
    })
    .catch(error => {
      console.log(error)
      dispatch(fetchBlogListFailed())
    })
}

