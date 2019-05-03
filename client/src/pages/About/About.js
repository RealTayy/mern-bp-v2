import React, { Component } from 'react'

export default class About extends Component {
  componentDidMount() {
    // Sets App's isTransitioning to false so you can transition to another page
      this.props.setIsTransitionLocked(true)
  }
  
  componentWillUnmount() {
      this.props.setIsTransitionLocked(false)
  }
  render() {
    return (
      <div id="About" className="page">
        About
      </div>
    )
  }
}
