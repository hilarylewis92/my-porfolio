import React, { Component } from 'react'
import { TweenLite, Linear } from 'gsap'

export default class Contact extends Component{
  componentDidMount() {
    this.gsapProjectsAnimation()
  }

  gsapProjectsAnimation() {
    TweenLite.to('.contact-section', 1,
      {
        opacity: 1,
        ease: Linear.easeNone
      }
    )
  }
  render() {
    return (
      <div className="Contact">
        <section className='contact-section'>
          <h4 className='contact-title'>
            Get in Touch
          </h4>

          <p className='contact-summary'>
            The best way to get in touch with me is to send me an email. I will try my best to respond in less than 24 hours.
          </p>
          <br />
          <a
            href='mailto:hilarylewis92@gmail.com' className='contact-email'>
            hilarylewis92@gmail.com
          </a>
          <br />
          <br />
          <p className='contact-summary'>
            You can also reach me through any social media below.
          </p>
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
        </section>
      </div>
    )
  }
}
