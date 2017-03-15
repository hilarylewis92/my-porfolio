import React, { Component } from 'react'
import { TweenLite, Linear } from 'gsap'

export default class About extends Component {
  constructor() {
    super()
    this.state = {
      skills: [
        'React/Redux',
        'JavaScript',
        'jQuery',
        'Node.js',
        'React-Router',
        'CSS/SASS',
        'HTML',
        'Git/GitHub'
      ],
      experience: [
        {
          company: 'Turing School of Software and Design',
          position: 'Front End Web Developer',
          dates: '(Aug 2016 - March 2017)'
        },
        {
          company: 'Manitou Springs School District',
          position: 'Math Teacher',
          dates: '(Aug 2014 - May 2016)'
        },
        {
          company: 'Manitou Springs School District',
          position: 'Fellow',
          dates: '(Jan 2014 - May 2016)'
        }
      ]
    }
  }

  componentDidMount() {
    this.gsapImageAnimation()
  }

  gsapImageAnimation() {
    TweenLite.to('.hilary-lewis-image', 1,
      {
        opacity:1,
        delay:1,
        ease:Linear.easeNone
      }
    )
    TweenLite.to('.about-me', 1,
      {
        margin:"0px auto",
        opacity:1
      }
    )
  }

  render() {
    return (
      <div className='About'>
        <img
          className='hilary-lewis-image'
          src={require ('../images/hilary-lewis.png')}
          role='presentation'
        />

      <section className='about-me'>
        <h2>
          About Me
        </h2>
          <p>
            As a creative front end developer, I value using both my left and right brain. My technical skills help me solve challenging problems and write efficient code, while my creative side encourages me to design clean and unique user interfaces on applications and websites.
          </p>
          <p>
            I'm a lifelong learner and am always looking to develop skills that will benefit me holistically. Whether it's attending Turing School of Software and Design to learn the languages required of a front end web developer, graduating with a Bachelor of Mathematics from Baylor University, or becoming a licensed yoga instructor, learning is my most rewarding passion.
          </p>

          <section className='experience-list'>
            <h3 className='experience-heading heading'>
              EXPERIENCE
            </h3>

            {this.state.experience.map((item, i) => {
              return(
                <div className='single-experience'
                  key={i}>
                  <h4 className='position'>
                    {item.position}
                  </h4>

                  <h5 className='company'>
                    {item.company}
                  </h5>

                  <h6 className='dates'>
                    {item.dates}
                  </h6>
                </div>
              )
            })}
          </section>

          <section className="skills-list">
            <h3 className='skills-heading heading'>
              SKILLS
            </h3>

            {this.state.skills.map((item, i) => {
              return(
                <h4 className='single-skill'
                  key={i}>
                  {item}
                </h4>
              )
            })}
          </section>

          <section className='education'>
            <h3 className='education-title'>
              EDUCATION
            </h3>
            <h4 className='education-school'>
              Baylor University, TX
            </h4>
            <h5 className='education-degree'>
              B.S. Mathematics
            </h5>
            <h4 className='education-school'>
              Turing School of Software and Design, CO
            </h4>
            <h5 className='education-degree'>
              Front End Development
            </h5>
          </section>

          <section className='about-website-section'>
            <h3 className='about-website-heading heading'>
              ABOUT THIS WEBSITE
            </h3>

            <p className='about-website'>
              I built this website using <a href='https://facebook.github.io/react/'
                target='_blank'
                className='underline'>
                React
              </a>, <a href='https://github.com/ReactTraining/react-router/tree/master/docs'
                target='_blank'
                className='underline'>
                 React Router
              </a>, and <a href='https://github.com/facebookincubator/create-react-app'
                target='_blank'
                className='underline'>
                 Create React App
              </a>.

              I used SASS for styling and responsiveness. Fonts are served through <a href='https://fonts.google.com/'
                target='_blank'
                className='underline'>
                 Google Fonts
              </a>. To see the code I developed for this website, visit my <a href='https://github.com/hilarylewis92/my-porfolio'
                className='underline'
                target='_blank'>
                 github
              </a>.
            </p>
          </section>
        </section>


        <button>
          <a
            className='resume-link button'
            href='https://resume.creddle.io/resume/fqzo0ru7jy5'
            target='_blank'>
              Resume &rarr;
          </a>
        </button>
      </div>
    )
  }
}
