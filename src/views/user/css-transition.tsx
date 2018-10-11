import React from "react"
import CSSTransition from "react-transition-group/CSSTransition"
import "./styles.scss"

export default class CssTran extends React.PureComponent {
  public state = {
    show: true
  }

  render() {
    const { show } = this.state
    return (
      <div>
        <button onClick={() => this.setState({ show: !show })}>
          click me!
        </button>
        <CSSTransition in={show} classNames="fade" timeout={500}>
          <div className="fade">textsome</div>
        </CSSTransition>
      </div>
    )
  }
}
