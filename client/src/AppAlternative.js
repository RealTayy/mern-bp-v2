import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition } from "react-transition-group";
import { Home, About, Contact, LoadingScreen } from './pages';
import { Navbar } from './components'
import { Store } from './Store';

function App() {
  // Subscribe to the closest parent component which uses `React.createContext`
  const { state, dispatch } = useContext(Store);
  // The above line is the same as:
  // const store = useContext(Store)
  // const state = store.state
  // const dispatch = store.dispatch

  // Get relevant state variables
  const { loadScreenFinished, loadScreenTimeout, pageTimeout } = state;

  // Pages
  const pages = [
    {
      route: '/',
      isExact: true,
      component: <Home />
    },
    {
      route: '/pageone',
      isExact: false,
      component: <Contact />
    },
    {
      route: '/pagetwo',
      isExact: false,
      component: <About />
    },
  ]

  // Fake loading screen stuff -- This is where the animation would go with a callback that sas HEY IM DONE LOADING! (aka the two lines below)
  if (!loadScreenFinished) setTimeout(() => {
    dispatch({
      type: 'SET_LOADSCREEN_FINISHED',
      payload: true
    })
  }, 2000);

  return <>
    {/* Returns either the loading screen or EVERYTHING ELSE */}
    {(loadScreenFinished) ? <>
      <Router forceRefresh={!('pushState' in window.history)}>
        <Navbar />
          {pages.map((page, i) =>
            <Route key={i} exact={page.isExact} path={page.route} >
              {({ match }) => {
                return (
                  <Transition                    
                    in={match != null}
                    timeout={pageTimeout}
                    unmountOnExit
                  >
                    {page.component}
                  </Transition>
                )
              }}
            </Route>
          )}
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