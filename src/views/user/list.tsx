import React from 'react'

import TestTransition from './transition'
import CssTran from './css-transition'
import TransGroup from './trans-group'

class UserList extends React.PureComponent<any, any> {
  public state = {
    show: false
  }
  constructor(props) {
    super(props)
    // this.state = {
    //   show: false
    // }
  }

  public render() {
    const { show } = this.state
    return (
      <div>
        hello user
        <button
          onClick={() => {
            this.setState({ show: !show })
          }}
        >
          test
        </button>
        <TestTransition in={show} />
        <br />
        <br />
        <CssTran />
        <br />
        <TransGroup />
      </div>
    )
  }
}
// const UserList = () => (
//   <div>
//     hello user
//     <TestTransition in={false} />
//   </div>
// )

export default UserList
