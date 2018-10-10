import React from 'react'
import { connect } from 'react-redux'

const result = props => {
  return (
    <div>
      result is：
      {props.count}
    </div>
  )
}

/**
 * @param state - redux 的 store
 * @param ownProps - 传入的 自定义的 props
 * @returns {object} - 返回的对象会 合并到 react 组件上（上述operate）的props
 */
const mapStateToProps = (state, ownProps) => {
  // const { visibilityFilter } = state;
  // const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  // return { todos };

  return {
    count: state
  }
}
export default connect(mapStateToProps)(result)
