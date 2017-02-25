import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <iframe
          src="https://resume.creddle.io/embed/fqzo0ru7jy5"
          width="850"
          height="1100"
          seamless>
        </iframe>

        <section className='resume-section'>
          <Link to='/about'
            activeClassName='active'
            className='about-link button'>
            About &larr;
          </Link>
        </section>

      </div>
    )
  }
}
