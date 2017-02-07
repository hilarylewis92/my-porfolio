import React, { Component } from 'react'
import { Link } from 'react-router'

import Hamburger from './Hamburger'
import Dropdown from './Dropdown'

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  handleClick() {
    this.setState({
        open: !this.state.open
    })
  }

  render() {
    return (
      <div role="nav" className='Nav'>
        <Link
          to='/'
          className='hl-logo'>
          HL
        </Link>

        <Hamburger
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={20}
          height={10}
          strokeWidth={1}
          rotate={0}
          color='#233B6E'
          animationDuration={0.5}
          right={0}
        />

        <div className='menu'>
          {this.state.open ?
          <ul>
            <Dropdown />
          </ul>
        : null }
        </div>
      </div>
    )
  }
}
