import * as React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
// import HeaderLayout from './layouts/HeaderLayout'
// import BlankLayout from './layouts/BlankLayout'
import routes from "./router"
import { Provider } from "react-redux"
import store from "./store"

class App extends React.Component {
  public render() {
    // return <BlankLayout>hello</BlankLayout>
    return (
      <Provider store={store}>
        <Router>
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
        </Router>
      </Provider>
    )
  }
}

export default App
