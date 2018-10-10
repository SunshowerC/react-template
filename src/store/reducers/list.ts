import { ADD_LIST } from '../actions/types'
export default (state = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, parseInt((Math.random() * 10) as any, 10)]
    default:
      return state
  }
}
