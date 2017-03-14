import React, { Component } from 'react'
import { Link } from 'react-router'
import { TweenLite, Linear } from 'gsap'

import ProjectsList from './ProjectsList.js'

export default class Projects extends Component {

  componentDidMount() {
    this.gsapProjectsAnimation()
  }

  gsapProjectsAnimation() {
    TweenLite.to('.Projects', 1.5,
      {
        opacity: 1,
        ease: Linear.easeNone
      }
    )
  }

  render() {
    return (
      <div className='Projects'>
        <h2
          className='projects-title'>
          My Projects
        </h2>

        <ul className='projects-list'>
          {ProjectsList.map((project, i) => {
            return(
              <li
                className='single-project'
                key={project.id}>
                <section className='project-left'>
                  <img
                    className='project-image'
                    src={project.src}
                    role='none'
                    />
                </section>

                <section className='project-right'>
                  <h3
                    className='project-title'>
                    {project.title}
                  </h3>
                  <p
                    className='project-description'>
                    {project.description}
                  </p>
                  <button
                    className='project-button'>
                    <a
                      className='project-url'
                      href={project.url}
                      target='_blank'>
                      view application
                    </a>
                  </button>
                  <button
                    className='project-button'>
                    <a
                      className='project-github'
                      href={project.github}
                      target='_blank'>
                      view code
                    </a>
                  </button>
                </section>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
