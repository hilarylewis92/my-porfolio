import React, { Component } from 'react'
import { TweenLite, Linear } from 'gsap'
import { Link } from 'react-router'

export default class Blog extends Component {
  componentDidMount() {
    this.gsapImageAnimation()
  }

  gsapImageAnimation() {
    TweenLite.to('.Blog', 1,
      {
        opacity:1,
        delay:1,
        ease:Linear.easeNone
      }
    )
  }

  render() {
    return (
      <div className='Blog'>
        <h2>
          My Blog
        </h2>
      </div>
    )
  }
}
