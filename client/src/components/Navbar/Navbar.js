import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {

  handleClick = (e) => {
    if(this.props.isTransitionLocked) e.preventDefault();
    this.props.setAppState({
      isTransitionLocked: true
    })
  }

  render() {
    return (
      <div className="Navbar">
        <Link onClick={this.handleClick} to="/">Home</Link>
        <Link onClick={this.handleClick} to="/pageone">One</Link>
        <Link onClick={this.handleClick} to="/pagetwo">Two</Link>
      </div>
    )
  }
}

export default Navbar
