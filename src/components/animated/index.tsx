import React, { SFC } from "react"
// import { Location } from "history"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Switch, withRouter, RouteComponentProps } from "react-router-dom"

const AnimatedRouter: SFC<RouteComponentProps> = ({ location, children }) => {
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={1000} classNames="fade">
        <Switch location={location}>{children}</Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default withRouter(AnimatedRouter)
