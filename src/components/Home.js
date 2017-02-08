import React, { Component } from 'react'
import { TweenLite, Linear } from 'gsap'

export default class Home extends Component {
  componentDidMount() {
    this.gsapHeroAnimation()
  }

  gsapHeroAnimation() {
    TweenLite.to('.hero-text', 1,
      {
        top: 200,
        opacity: 1,
        lazy: true,
      }
    )
    TweenLite.to('.light', 3,
      {
        opacity: 0.3,
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
            Front End Developer.
          </h3>
          <h3 className='light'>
            Denver, Colorado.
          </h3>
        </section>
      </div>
    )
  }
}
