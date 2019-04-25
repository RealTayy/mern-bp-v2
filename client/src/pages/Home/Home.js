import React, { Component } from 'react'
import './Home.scss'

export default class Home extends Component {
  componentDidMount() {
    // Sets App's isTransitioning to false so you can transition to another page
    this.props.setAppState({
      isTransitionLocked: true
    })
  }
  
  componentWillUnmount() {
    this.props.setAppState({
      isTransitionLocked: false
    })
  }
  
  
  render() {
    return (
      <div id="Home" class="page">
        Home
      </div>
    )
  }
}