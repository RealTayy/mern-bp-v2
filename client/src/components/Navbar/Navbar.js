import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const { isTransitionLocked, setIsTransitionLocked } = props

  const handleClick = (e) => {
    console.log(isTransitionLocked);
    if (isTransitionLocked) e.preventDefault();
  }

  return (
    <div className="Navbar">
      <Link onClick={handleClick} to="/">Home</Link>
      <Link onClick={handleClick} to="/pageone">One</Link>
      <Link onClick={handleClick} to="/pagetwo">Two</Link>
    </div>
  )
}