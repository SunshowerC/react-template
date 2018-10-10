import React, { SFC } from 'react'
import { connect, MapDispatchToProps } from 'react-redux'

import { multiple } from '../../../store/actions'
interface IDispatchProps {
  multiple: typeof multiple
}

interface IProps {
  name: string
}

const operate: SFC<IDispatchProps & IProps> = props => {
  return (
    <div>
      <button onClick={() => props.multiple()}> multiple {props.name} </button>
    </div>
  )
}

// const mapDispatchToProps: MapDispatchToProps<
//   IDispatchProps,
//   IProps
// > = dispatch => ({
//   multiple: () => dispatch(multiple())
// })
const mapDispatchToProps: MapDispatchToProps<IDispatchProps, IProps> = {
  multiple
}

export default connect(
  null,
  mapDispatchToProps
)(operate)
