import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default class TransGroup extends React.PureComponent {
  state = {
    list: ['a', 'b', 'c', 'd']
  }

  render() {
    const { list } = this.state
    return (
      <div>
        <button
          onClick={() => {
            const nList = [...list]
            nList.pop()
            this.setState(state => ({
              list: nList
            }))
          }}
        >
          click
        </button>
        <TransitionGroup>
          {list.map(item => (
            <CSSTransition key={item} classNames="fade" timeout={500}>
              <div className="fade"> {item} </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    )
  }
}
