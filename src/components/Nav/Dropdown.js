import React, { Component } from 'react'
import { Link } from 'react-router'
import { TweenLite, Linear } from 'gsap'

export default class Dropdown extends Component {

  render() {
    return (
      <div role="nav" className='Dropdown'>
        <li><Link to="/"
          className='link'>
          Home
        </Link></li>

        <li><Link to="/projects"
          className='link right'>
          Projects
        </Link></li>

        <li><Link to="/about"
          className='link middle-nav right'>
          About
        </Link></li>

        <li><Link to="/contact"
          className='link right'>
          Contact
        </Link></li>
      </div>
    )
  }
}
