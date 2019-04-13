import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Link to="/">Home</Link>
        <Link to="/pageone">One</Link>
        <Link to="/pagetwo">Two</Link>
      </div>
    )
  }
}

export default Navbar
