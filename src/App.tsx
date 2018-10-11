import * as React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
// import HeaderLayout from './layouts/HeaderLayout'
// import BlankLayout from './layouts/BlankLayout'
import routes from "./router"
import { Provider } from "react-redux"
import store from "./store"
import { TransitionGroup, CSSTransition } from "react-transition-group"

class App extends React.Component {
  public render() {
    // return <BlankLayout>hello</BlankLayout>
    return (
      <Provider store={store}>
        <Router>
          <Route
            render={({ location }) => (
              <div>
                <TransitionGroup>
                  <CSSTransition
                    key={location.pathname}
                    timeout={1000}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      {routes.map((route, index) => (
                        <Route
                          className="fade"
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
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            )}
          />

          {/* <Route exact={true} path="/" component={Home} /> */}
        </Router>
      </Provider>
    )
  }
}

export default App
