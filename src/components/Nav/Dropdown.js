import React from 'react';
import { Link } from 'react-router'

export default function Dropdown(props)  {
  return (
    <div role="nav" className='Dropdown' onClick={props.menuClicked}>
      <Link to="/"
        className='link'>
        <li>Home</li>
      </Link>

      <Link to="/projects"
        className='link right'>
        <li>Projects</li>
      </Link>

      <Link to="/about"
        className='link middle-nav right'>
        <li>About</li>
      </Link>

      <Link to="/contact"
        className='link right'>
        <li>Contact</li>
      </Link>
    </div>
  )
}
