import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'

import Nav from './components/Nav/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './styles/index.scss'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/about" component={About} />
        <Match exactly pattern="/projects" component={Projects} />
        <Match exactly pattern="/contact" component={Contact} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default Root

render(<Root />, document.querySelector("#root"))
