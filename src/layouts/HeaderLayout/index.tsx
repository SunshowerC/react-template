import React from "react"
import "./index.scss"

import logoSvg from "./logo.svg"

export default class HeaderLayout extends React.Component {
  public render() {
    const { children } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoSvg} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section className="App-intro">{children}</section>
      </div>
    )
  }
}
