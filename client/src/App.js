import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Transition } from "react-transition-group";
import { LoadingScreen } from './pages';
import { Navbar } from './components'
import { Store } from './Store';
import Routes from './Routes'

function App() {
  // Subscribe to the closest parent component which uses `React.createContext`
  const { state, dispatch } = useContext(Store);
  // The above line is the same as:
  // const store = useContext(Store)
  // const state = store.state
  // const dispatch = store.dispatch

  // Get relevant state variables
  const { loadScreenFinished, loadScreenTimeout } = state;

  // Fake loading screen stuff -- This is where the animation would go with a callback that sas HEY IM DONE LOADING! (aka the two lines below)
  if (!loadScreenFinished) setTimeout(() => {
    dispatch({
      type: 'SET_LOADSCREEN_FINISHED',
      payload: true
    })
  }, 2000);

  return <>
    {/* Returns either the loading screen or EVERYTHING ELSE */}
    {(loadScreenFinished) ?
      <Router forceRefresh={!('pushState' in window.history)}>
        <Navbar />
        <Routes />
      </Router> : ''
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