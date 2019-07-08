import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Transition } from "react-transition-group";
import { Home, About, Contact, LoadingScreen } from './pages';
import { Navbar } from './components'

function App() {
  // Declare state variables
  const
    [loadScreenFinished, setLoadScreenFinished] = useState(false),
    [pageTimeout, setPageTimeout] = useState({ enter: 2000, exit: 2000 }),
    [loadScreenTimeout, setLoadScreenTimeout] = useState({ enter: 2000, exit: 2000 }),
    [isTransitionLocked, setIsTransitionLocked] = useState(true);

  // Fake loading screen stuff -- This is where the animation would go with a callback that sas HEY IM DONE LOADING! (aka the two lines below)
  if (!loadScreenFinished) setTimeout(() => {
    setLoadScreenFinished(true);
    setIsTransitionLocked(false);
  }, 2000);

  return <>
    {/* Returns either the loading screen or EVERYTHING ELSE */}
    {(loadScreenFinished) ? <>
      <Router forceRefresh={!('pushState' in window.history)}>
        <Navbar
          isTransitionLocked={isTransitionLocked}
          setIsTransitionLocked={setIsTransitionLocked}
        />
        <Route exact path="/" >
          {({ match }) => {
            return (
              <Transition
                in={match != null}
                timeout={pageTimeout}
                unmountOnExit
              >
                <Home
                  isTransitionLocked={isTransitionLocked}
                  setIsTransitionLocked={setIsTransitionLocked}
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
                timeout={pageTimeout}
                unmountOnExit
              >
                <Contact
                  isTransitionLocked={isTransitionLocked}
                  setIsTransitionLocked={setIsTransitionLocked}
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
                timeout={pageTimeout}
                unmountOnExit
              >
                <About
                  isTransitionLocked={isTransitionLocked}
                  setIsTransitionLocked={setIsTransitionLocked}
                />
              </Transition>
            )
          }}
        </Route>
      </Router>
    </> : ''
    }
    < Transition
      in={!loadScreenFinished}
      timeout={loadScreenTimeout}
      unmountOnExit
    >
      <LoadingScreen />
    </Transition>
  </>
}
export default App;