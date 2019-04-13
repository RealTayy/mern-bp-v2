import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Transition } from "react-transition-group";
import { Home, About, Contact, LoadingScreen } from './pages';
import { Navbar } from './components'

class App extends Component {
  state = {
    loadScreenFinished: false,
    pageTimeout: {
      enter: 2000,
      exit: 2000
    },
    loadscreenTimeout: {
      enter: 2000,
      exit: 2000,
    }
  }

  render() {
    // Fake loading screen stuff
    if (!this.state.loadScreenFinished) setTimeout(() => {
      this.setState({ loadScreenFinished: true })
    }, 2000);
    // Returns either the loading screen or 
    return <>
      {(this.state.loadScreenFinished) ? <>
        {/* IF THINGS BREAK IT IS PROBABLY THIS LINE BELOW WITH PUSHSTATE */}
        <Router forceRefresh={!('pushState' in window.history)}>
          <Navbar />
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
        timeout={this.state.loadscreenTimeout}
        unmountOnExit
      >
        <LoadingScreen />
      </Transition>

    </>
  }
}
export default App;