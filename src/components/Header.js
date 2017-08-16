import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>
          Hugo do Carmo
        </h1>
        <nav>
          <ul>
            <li>
              About
            </li>
            <li>
              <a href='#codepen-section'>
                Codepen
              </a>
            </li>
            <li>
              <a href='#github-section'>
                Github
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
