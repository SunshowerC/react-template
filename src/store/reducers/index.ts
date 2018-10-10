// import { combineReducers } from "redux";
// import visibilityFilter from "./visibilityFilter";
// import todos from "./todos";

export default (state, action) => {
  if (typeof state === 'undefined') {
    return 0
  }

  switch (action.type) {
    case '+':
      return state + 1
    case '-':
      return state - 1
    case 'x':
      return state * state
    default:
      return state
  }
}
