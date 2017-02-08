import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import { Link } from 'react-router'
import { TweenLite, Linear } from 'gsap'

import Project from './Project'
import ProjectsList from './ProjectsList.js'

var masonryOptions = {
  transitionDuration: 1
}

export default class Projects extends Component {

  componentDidMount() {
    this.gsapProjectsAnimation()
  }

  gsapProjectsAnimation() {
    TweenLite.to('.Projects', 1.5,
      {
        opacity:1,
        ease:Linear.easeNone
      }
    )
  }

  render() {
    return (
      <div>
        <section className='Projects'>
          <h3
            className='projects-title'>
            My Projects
          </h3>

          <Masonry
            className={'projects-list'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}>

            {ProjectsList.map((project, i) => {
              return(
                <li
                  className='single-project'
                  key={project.id}>
                  <Link
                    to={`/projects/${project.id}`}
                    target='_blank'>
                    <img
                      className='project-image'
                      src={project.src}
                      role='none'
                    />
                </Link>
              </li>
              )
            })}
          </Masonry>
        </section>
      </div>
    )
  }
}
