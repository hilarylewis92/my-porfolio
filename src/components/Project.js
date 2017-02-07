import React, { Component } from 'react'
import { TweenLite, Linear } from 'gsap'
import { Link } from 'react-router'

import ProjectsList from './ProjectsList.js'

export default class Project extends Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }

  componentDidMount() {
    this.setState({
      index: this.props.params.id
    })
    this.gsapProjectsAnimation()
  }

  gsapProjectsAnimation() {
    TweenLite.to('.individual-project', 1,
      {
        opacity:1,
        ease:Linear.easeNone
      }
    )
    TweenLite.to('.project-button-section', 1,
      {
        opacity:1,
        ease:Linear.easeNone
      }
    )
  }

  render() {
    const { index } = this.state
    return (
      <div>
        <section className='individual-project'>
            <section className='project-left'>
              <img
                className='individual-project-image'
                src={ProjectsList[index].src}
                role='none'
                />

              <a
                className='project-url'
                href={ProjectsList[index].url}
                target='_blank'>
                View application
              </a>

              <a
                className='project-github'
                href={ProjectsList[index].github}
                target='_blank'>
                View code
              </a>
            </section>

            <section
              className='project-right'>
              <h1
                className='project-title'>
                {ProjectsList[index].title}
              </h1>

              <p
                className='project-description'>
                {ProjectsList[index].description}
              </p>
            </section>
          </section>

          <section
            className='project-button-section'>
            <Link
              to='/projects'
              className='project-link button'>
               &larr; Projects
            </Link>
          </section>
      </div>
    )
  }
}
