import React from 'react'

class Navigation extends React.Component {
  render () {
    return (
      <nav className='navbar'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a href='#about-section' className='nav-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='#codepen-section' className='nav-link'>
              Codepen
            </a>
          </li>
          <li className='nav-item'>
            <a href='#github-section' className='nav-link'>
              Github
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
