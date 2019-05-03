import React, { Component } from 'react'
import './Home.scss'

export default class Home extends Component {
  componentDidMount() {
    // Sets App's isTransitioning to false so you can transition to another page
      this.props.setIsTransitionLocked(true)
  }
  
  componentWillUnmount() {
      this.props.setIsTransitionLocked(false)
  }
  
  
  render() {
    return (
      <div id="Home" className="page">
        Home
      </div>
    )
  }
}