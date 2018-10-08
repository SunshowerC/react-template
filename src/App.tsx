import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import HeaderLayout from './layouts/HeaderLayout'
// import BlankLayout from './layouts/BlankLayout'
import routes from './router'

class App extends React.Component {
  public render() {
    // return <BlankLayout>hello</BlankLayout>
    return (
      <BrowserRouter>
        <div>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact={true}
              path={route.path}
              render={props => (
                <route.layout>
                  <route.component {...props} />
                </route.layout>
              )}
            />
          ))}
        </div>
        {/* <Route exact={true} path="/" component={Home} /> */}
      </BrowserRouter>
    )
  }
}

export default App
