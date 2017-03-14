import React, {Component} from 'react'
import { TweenLite } from 'gsap'

export default class Footer extends Component{

  componentDidMount() {
    this.gsapHeroAnimation()
  }

  gsapHeroAnimation() {
    TweenLite.to('.Footer', 1.5,
      {
        opacity: 1,
      }
    )
  }

  render(){
    return (
      <section className='Footer'>
        <a href='mailto:hilarylewis92@gmail.com'
          className='mail single-contact'>
        </a>

        <a href='https://www.linkedin.com/in/hilarylewis92'
          target='_blank'
          className='linkedin single-contact'>
        </a>

        <a href='https://github.com/hilarylewis92'
          target='_blank'
          className='github single-contact'>
        </a>

        <a href='https://twitter.com/hilarylewis92'
          target='_blank'
          className='twitter single-contact'>
        </a>
      </section>
    )
  }
}
