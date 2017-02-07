import React, { Component } from 'react'
import { TweenLite, Linear } from 'gsap'

class Home extends Component {
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
  }

  render() {
    return (
      <div className='Home'>
        <section className='hero-text'>
          <h3>
            Hilary Lewis.
          </h3>
          <h3>
            Mathematical. Creative.
          </h3>
          <h3>
            Teacher. Learner.
          </h3>
          <h3
            className='bold'>
            Front End Developer.
          </h3>
          <h3>
            Denver, Colorado.
          </h3>
        </section>
      </div>
    )
  }
}

export default Home
