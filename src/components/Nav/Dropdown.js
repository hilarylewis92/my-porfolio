import React from 'react';
import { Link } from 'react-router'

export default function Dropdown(props)  {
  return (
    <div role='navigation'
      className='Dropdown'
      onClick={props.menuClicked}>

      <Link to='/'>
        <li>Home</li>
      </Link>

      <Link to='/projects'>
        <li>Projects</li>
      </Link>

      <Link to='/about'
        className='link middle-nav right'>
        <li>About</li>
      </Link>

      <a href='https://medium.com/hilarylewis'
        target='_blank'>
        <li>Blog</li>
      </a>

      <Link to='/contact'>
        <li>Contact</li>
      </Link>
    </div>
  )
}
