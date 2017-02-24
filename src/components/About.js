import React, { Component } from 'react'
import { TweenLite, Linear } from 'gsap'
import { Link } from 'react-router'

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
          dates: '(Aug 2016 - Current)'
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
    {opacity:1, delay:1, ease:Linear.easeNone}
    )
    TweenLite.to('.about-me', 1,
    {margin:"0px auto", opacity:1}
    )
  }

  render() {
    return (
      <div className='About'>
        <img
          className='hilary-lewis-image'
          src={require ('../images/hilary-lewis.jpg')}
          role='none'
        />

        <section className='about-me'>
          <h3 className='title'>
            About Me
          </h3>

          <section className="summary">
            <p className="summary-paragraph">
              As a creative front end developer, I value using both my left and right brain. My technical skills help me solve challenging problems and write efficient code, while my creative side encourages me to design clean and unique user interfaces on applications and websites.
            </p>
            <br />
            <p className="summary-paragraph">
              As a lifelong learner, I am always looking to develop skills that will benefit my life holistically. Whether it's attending Turing School of Software and Design to learn the languages required of a front end web developer, graduating with a Bachelor of Mathematics from Baylor University or becoming a licensed yoga instructor, learning is my most rewarding passion.
            </p>
          </section>

          <section className='experience-list'>
            <h3 className='experience-heading heading'>
              EXPERIENCE
            </h3>

          {this.state.experience.map(item => {
            return(
              <div className='single-experience'>
                <h5 className='position'>
                  {item.position}
                </h5>

                <h6 className='company'>
                  {item.company}
                </h6>

                <p className='dates'>
                  {item.dates}
                </p>
              </div>
            )
          })}
        </section>

        <section className="skills-list">
          <h3 className='skills-heading heading'>
            SKILLS
          </h3>

          {this.state.skills.map(item => {
            return(
              <h5 className='single-skill'>
                {item}
              </h5>
            )
          })}
        </section>

        <section className='education'>
          <h3 className='education-title'>
            EDUCATION
          </h3>
          <h4 className='education-school'>
            Baylor University, Texas
          </h4>
          <h5 className='education-degree'>
            B.S. Mathematics
          </h5>
          <h4 className='education-school'>
            Turing School of Software and Design
          </h4>
          <h5 className='education-degree'>
            Front End Development
          </h5>
        </section>

        <section
          className='about-website-section'>
          <h4 className='about-website-heading heading'>
            ABOUT THIS WEBSITE
          </h4>

          <p>
            I build this website using <a href ='https://facebook.github.io/react/'
              target='_blank'
              className='underline'>
              React
            </a>, <a href ='https://github.com/ReactTraining/react-router/tree/master/docs'
              target='_blank'
              className='underline'>
               React Router
            </a>, and <a href ='https://github.com/facebookincubator/create-react-app'
              target='_blank'
              className='underline'>
               Create React App
            </a>.

            I used SASS for styling and responsiveness and fonts are served through <a href ='https://fonts.google.com/'
              target='_blank'
              className='underline'>
               Google Fonts
            </a>. To see the code I developed for this website, visit <a href = 'https://github.com/hilarylewis92/my-porfolio'
              className='underline'
              target='_blank'>
               my github
            </a>.
          </p>
        </section>

          <section className='resume-section'>
            <Link to='/resume'
              activeClassName='active'
              className='resume-link button'
              target='_blank'>
              Resume &rarr;
            </Link>
          </section>
        </section>
      </div>
    )
  }
}
