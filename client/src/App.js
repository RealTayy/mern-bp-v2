import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';



class App extends Component {
  state = {
    timeout: {
      enter: 500,
      exit: 500
    }
  }
  render(location, key) {
    return <>
      <Router forceRefresh={!'pushState' in window.history}>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/pageone">One</Link>
          <Link to="/pagetwo">Two</Link>
        </div>
        <div>
          <TransitionGroup>
            <CSSTransition
              key={key}
              timeout={300}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/pageone" component={Contact} />
                <Route exact path="/pagetwo" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </Router>
    </>
  }
}

export default App;
