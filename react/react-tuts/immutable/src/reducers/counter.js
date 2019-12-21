import { fromJS } from 'immutable'

const initState = fromJS({
  count: 100
})

export default (state = initState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      // return state.setIn(['count'], state.get('count') + 1)
      return state.updateIn(['count'], v => v + 1)
    case 'DECREMENT':
      return state.update('count', v => v - 1)
    default:
      return state
  }
}