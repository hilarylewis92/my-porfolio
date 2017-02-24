import React, { Component } from 'react'
import { TweenLite, Linear } from 'gsap'

import Footer from './Footer.js'

export default class Home extends Component {
  componentDidMount() {
    this.gsapHeroAnimation()
  }

  gsapHeroAnimation() {
    TweenLite.to('.hero-text', 1.5,
      {
        top: 200,
        opacity: 1,
        lazy: true,
      }
    )
    TweenLite.to('.light', 4,
      {
        opacity: 0.2,
      }
    )
    TweenLite.to('.red', 4,
      {
        color: '#FE5F55',
      }
    )
  }

  render() {
    return (
      <div className='Home'>
        <section className='hero-text'>
          <h3 className='light'>
            Hilary Lewis.
          </h3>
          <h3 className='light'>
            Mathematical. Creative.
          </h3>
          <h3 className='light'>
            Teacher. Learner.
          </h3>
          <h3
            className='bold'>
            Front End <span className='red'>Developer.</span>
          </h3>
          <h3 className='light'>
            Denver, Colorado.
          </h3>
        </section>
        <div className='home-footer'>
          <Footer />
        </div>
      </div>
    )
  }
}
