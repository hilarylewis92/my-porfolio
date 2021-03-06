import React, { Component } from 'react'
import { Link } from 'react-router'

import Hamburger from './Hamburger'
import Dropdown from './Dropdown'

export default class Header extends Component {
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
      <div role="navigation" className='Header'>
        <Link
          to='/'>
          <div className='hl-logo'>
          </div>
        </Link>

        <Hamburger
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={25}
          height={15}
          strokeWidth={2}
          rotate={0}
          color='#1b3c59'
          animationDuration={0.5}
          right={0}
        />

        <div className='menu'>
          {this.state.open ?
          <ul>
            <Dropdown
              menuClicked={this.handleClick.bind(this)}
            />
          </ul>
        : null }
        </div>
      </div>
    )
  }
}
