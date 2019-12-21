import actionType from './actionType'

export const increment = (id) => {
  return {
    type: actionType.CART_AMOUNT_INCREMENT,
    payload: {
      id
    }
  }
}

export const decrement = (id) => {
  return {
    type: actionType.CART_AMOUNT_DECREMENT,
    payload: {
      id
    }
  }
}