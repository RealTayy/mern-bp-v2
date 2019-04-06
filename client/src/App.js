import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { TransitionGroup, Transition } from "react-transition-group";
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

  setTimeout = (timeout) => this.setState({ timeout: timeout });

  render() {
    return <>
      <Router forceRefresh={!'pushState' in window.history}>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/pageone">One</Link>
          <Link to="/pagetwo">Two</Link>
        </div>
        <Route render={({ location }) => {
          const { pathname, key } = location;
          return (
            <TransitionGroup>
              <Transition
                key={key}
                appear={true}
                timeout={this.state.timeout}
              >
                <Switch location={location}>
                  <Route exact path="/" render={() => {                    
                    return <Home

                    />
                  }} />
                  <Route exact path="/pageone" render={() => {
                    return <Contact

                    />
                  }} />
                  <Route exact path="/pagetwo" component={About} />
                </Switch>
              </Transition>
            </TransitionGroup>
          )
        }} />
      </Router>
    </>
  }
}

export default App;
