import React, {Component} from 'react'
import { TweenLite, Linear } from 'gsap'

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
        <div className='single-contact'>
          <a href='mailto:hilarylewis92@gmail.com'
            className='mail'>
          </a>
        </div>

        <div className='single-contact'>
          <a href='https://www.linkedin.com/in/hilarylewis92'
            target='_blank'
            className='linkedin'>
          </a>
        </div>

        <div className='single-contact'>
          <a href='https://github.com/hilarylewis92'
            target='_blank'
            className='github'>
          </a>
        </div>

        <div className='single-contact'>
          <a href='https://twitter.com/hilarylewis92'
            target='_blank'
            className='twitter'>
          </a>
        </div>
      </section>
    )
  }
}
