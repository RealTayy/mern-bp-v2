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
    },
    isTransitionLocked: true
  }

  setAppState = (state) => {
    this.setState(state)
  }

  render() {
    // Fake loading screen stuff
    if (!this.state.loadScreenFinished) setTimeout(() => {
      this.setState({ loadScreenFinished: true })
    }, 2000);

    const {
      state,
      setAppState,      
    } = this;

    // Returns either the loading screen or EVERYTHING ELSE
    return <>
      {(this.state.loadScreenFinished) ? <>
        {/* IF THINGS BREAK IT IS PROBABLY THIS LINE BELOW WITH PUSHSTATE */}
        <Router forceRefresh={!('pushState' in window.history)}>
          <Navbar
            isTransitionLocked={state.isTransitionLocked}
            setAppState={setAppState}
          />
          <Route exact path="/" >
            {({ match }) => {
              return (
                <Transition
                  in={match != null}
                  timeout={state.pageTimeout}
                  unmountOnExit
                >
                  <Home
                    isTransitionLocked={state.isTransitionLocked}
                    setAppState={setAppState}
                  />
                </Transition>
              )
            }}
          </Route>
          <Route path="/pageone" >
            {({ match }) => {
              return (
                <Transition
                  in={match != null}
                  timeout={state.pageTimeout}
                  unmountOnExit
                >
                  <Contact
                    isTransitionLocked={state.isTransitionLocked}
                    setAppState={setAppState}
                  />
                </Transition>
              )
            }}
          </Route>
          <Route path="/pagetwo" >
            {({ match }) => {
              return (
                <Transition
                  in={match != null}
                  timeout={state.pageTimeout}
                  unmountOnExit
                >
                  <About
                    isTransitionLocked={state.isTransitionLocked}
                    setAppState={setAppState}
                  />
                </Transition>
              )
            }}
          </Route>
        </Router>
      </> : ''
      }
      < Transition
        in={!state.loadScreenFinished}
        timeout={state.loadscreenTimeout}
        unmountOnExit
      >
        <LoadingScreen />
      </Transition>

    </>
  }
}
export default App;