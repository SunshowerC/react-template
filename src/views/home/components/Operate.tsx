import React from 'react'
import { connect } from 'react-redux'

import { add } from '../../../store/actions'
const operate = props => {
  return (
    <div>
      <button onClick={() => props.dispatch(add())}> add </button> {props.name}
    </div>
  )
}

export default connect()(operate)
