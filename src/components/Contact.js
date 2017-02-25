import React, { Component } from 'react'
import { TweenLite, Linear } from 'gsap'

import Footer from './Footer.js'

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
      <div>
        <div className='Contact'>
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
              You can also reach me through any social media found below.
            </p>
          </section>
        </div>
        <Footer />
      </div>
    )
  }
}
