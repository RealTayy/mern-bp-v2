import React, { useContext, useEffect } from 'react'
import './Home.scss'
import { Store } from '../../Store'

export default function Home() {
  // Subscribe to the closest parent component which uses `React.createContext`
  const { dispatch } = useContext(Store);
  // The above line is the same as:
  // const store = useContext(Store)
  // const dispatch = store.dispatch

  useEffect(() => {
    dispatch({
      type: 'SET_ACTIVE_PAGE',
      payload: 'Home'
    })
  }, [dispatch])

  return (
    <div id="_Home" className="_Home page">
      Home
    </div>
  )
}