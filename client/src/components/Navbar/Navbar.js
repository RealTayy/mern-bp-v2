import React, { useContext } from 'react'
import { Store } from '../../Store'
import { Link } from 'react-router-dom';

export default function Navbar() {
  // Subscribe to the closest parent component which uses `React.createContext`
  const { state } = useContext(Store);
  // The above line is the same as:
  // const store = useContext(Store)
  // const dispatch = store.dispatch 

  // Get relevant state variables
  const { isTransitionLocked, activePage } = state;

  // Nav Links
  const navLinks = [
    {
      page: 'Home',
      route: '/',
      text: 'Home'
    },
    {
      page: 'About',
      route: '/pageone',
      text: 'One'
    },
    {
      page: 'Contact',
      route: '/pagetwo',
      text: 'Two'
    },
  ]

  const handleClick = (e) => {
    // Prevent going to another page if transition lock is true
    if (isTransitionLocked) return e.preventDefault();

    // Prevent going to another page if multiple pages on screen
    const pages = document.getElementsByClassName('page')
    if (pages.length > 1) return e.preventDefault();

    // Prevent going to another page if the current page matches the link clicked
    const clickedLink = e.target.getAttribute('page')
    if (activePage === clickedLink) return e.preventDefault();
  }

  return (
    <div className="_Navbar">
      {navLinks.map((link, i) =>
        <Link key={i} onClick={handleClick} to={link.route} page={link.page}>{link.text}</Link>
      )}
    </div>
  )
}