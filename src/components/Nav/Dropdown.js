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
      <section className='Footer'>
        <div className='single-contact'>
          <a href='mailto:hilarylewis92@gmail.com'
            className='mail'>
          </a>
        </div>

        <div className='single-contact'>
          <a href='https://www.linkedin.com/in/hilarylewis92'
            target='_blank'
            className='linkedin'>
          </a>
        </div>

        <div className='single-contact'>
          <a href='https://github.com/hilarylewis92'
            target='_blank'
            className='github'>
          </a>
        </div>

        <div className='single-contact'>
          <a href='https://twitter.com/hilarylewis92'
            target='_blank'
            className='twitter'>
          </a>
        </div>
      </section>
    </div>
  )
}
