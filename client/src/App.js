import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    const num = Math.floor(Math.random() * 100 + 1)
    return
    <Router forceRefresh={!'pushState' in window.history}>

    </Router>
  }
}

export default App;