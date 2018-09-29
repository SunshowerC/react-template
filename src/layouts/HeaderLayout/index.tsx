import React from 'react'
import './index.css';

import logo from './logo.svg';

export default class HeaderLayout extends React.Component {
    public render(){
        const { children } = this.props
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
                <p className="App-intro">
                    {children}
                </p>
                </div>
        )
    }
}