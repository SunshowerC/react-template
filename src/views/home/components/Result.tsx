import React, { SFC } from "react"
import { connect, MapStateToProps } from "react-redux"
import { IState } from "src/store/reducers"

interface IMapState {
  count: number
  list: any[]
}

const result: SFC<IMapState> = props => {
  return (
    <div>
      result is：
      {props.count}
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

/**
 * @param state - redux 的 store
 * @param ownProps - 传入的 自定义的 props
 * @returns {object} - 返回的对象会 合并到 react 组件上（上述operate）的props
 */
const mapStateToProps: MapStateToProps<IMapState, {}, IState> = (
  state,
  ownProps
) => {
  // const { visibilityFilter } = state;
  // const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  // return { todos };
  return {
    count: state.simpleCount,
    list: state.list
  }
}
export default connect(mapStateToProps)(result)
