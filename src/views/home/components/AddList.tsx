import React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { IAction, addList } from 'src/store/actions'
import { State as SimpleCountState } from 'src/store/reducers/simple-count'
import { IState } from 'src/store/reducers'

interface IMapDispatchToProps {
  addList: IAction
}

interface IMapState {
  count: SimpleCountState
}

// @connect()
class AddList extends React.Component<IMapState & IMapDispatchToProps> {
  render() {
    const { addList: dispatchAddList } = this.props

    return (
      <button onClick={() => dispatchAddList(this.props.count)}>
        add AddList
      </button>
    )
  }
}

const mapDispathToProps: MapDispatchToProps<IMapDispatchToProps, any> = {
  addList
}
const mapState2Props: MapStateToProps<IMapState, any, IState> = state => {
  return {
    count: state.simpleCount
  }
}

export default connect(
  mapState2Props,
  mapDispathToProps
)(AddList)
