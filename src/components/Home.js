import React, { Component } from 'react'
import { TweenLite, Linear } from 'gsap'

import Footer from './Footer.js'

export default class Home extends Component {
  componentDidMount() {
    this.gsapHeroAnimation()
  }

  gsapHeroAnimation() {
    TweenLite.to('.Home', 1,
      {
        top: 150,
        opacity: 1,
      }
    )
    TweenLite.to('.light', 3,
      {
        opacity: 0.2,
      }
    )
    TweenLite.to('.red', 3,
      {
        color: '#FE5F55',
      }
    )
  }

  render() {
    return (
      <div className='Home'>
        <h1 className='light'>
          Hilary Lewis.
        </h1>
        <h1 className='light'>
          Mathematical. Creative.
        </h1>
        <h1 className='light'>
          Teacher. Learner.
        </h1>
        <h1
          className='bold'>
          Front End
          <span className='red'>
            Developer.
          </span>
        </h1>
        <h1 className='light'>
          Denver, Colorado.
        </h1>
      </div>
    )
  }
}
