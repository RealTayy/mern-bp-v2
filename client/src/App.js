import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Transition } from "react-transition-group";
import { Home, About, Contact, LoadingScreen } from './pages';

class App extends Component {
  state = {
    loadScreenFinished: false,
    pageTimeout: {
      enter: 500,
      exit: 500
    }
  }  

  render() {
    // Fake loading screen stuff
    if (!this.state.loadScreenFinished) setTimeout(() => {
      this.setState({ loadScreenFinished: true })
    }, 1000);
    return <>
      {(this.state.loadScreenFinished) ? <>
        <Router forceRefresh={!'pushState' in window.history}>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/pageone">One</Link>
            <Link to="/pagetwo">Two</Link>
          </div>
          <Route exact path="/" >
            {({ match }) => {
              return (
                <Transition
                  in={match != null}
                  timeout={this.state.pageTimeout}
                  unmountOnExit
                >
                  <Home />
                </Transition>
              )
            }}
          </Route>
          <Route path="/pageone" >
            {({ match }) => {
              return (
                <Transition
                  in={match != null}
                  timeout={this.state.pageTimeout}
                  unmountOnExit
                >
                  <Contact />
                </Transition>
              )
            }}
          </Route>
          <Route path="/pagetwo" >
            {({ match }) => {
              return (
                <Transition
                  in={match != null}
                  timeout={this.state.pageTimeout}
                  unmountOnExit
                >
                  <About />
                </Transition>
              )
            }}
          </Route>
        </Router>
      </> : ''
      }
      < Transition
        in={!this.state.loadScreenFinished}
        timeout={this.state.pageTimeout}
        unmountOnExit
      >
        <LoadingScreen />
      </Transition>

    </>
  }
}
export default App;