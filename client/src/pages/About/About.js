import React, { useContext, useEffect } from 'react'
import { Store } from '../../Store'

export default function About() {
  // Subscribe to the closest parent component which uses `React.createContext`
  const { dispatch } = useContext(Store);
  // The above line is the same as:
  // const store = useContext(Store)
  // const dispatch = store.dispatch

  useEffect(() => {
    dispatch({
      type: 'SET_ACTIVE_PAGE',
      payload: 'About'
    })
  }, [dispatch])

  return (
    <div id="_About" className="_About page">
      About
    </div>
  )
}