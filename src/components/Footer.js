import React from 'react'

class Footer extends React.Component {
  render () {
    let now = new Date()

    return (
      <footer>
        <p className='text-center'>
          © {now.getFullYear()} <a href='https://www.linkedin.com/in/hugo-augusto-do-carmo-5415a442' target='_blank'>Hugo do Carmo</a>. All rights reserved. <a href='mailto:hugrito.kun@gmail.com'>hugrito.kun@gmail.com</a>
        </p>
        <nav>
          <ul>
            <li>
              <a href='https://github.com/spelcaster'
                target='_blank'>
                <i className='fa fa-fw fa-github' />
              </a>
            </li>
            <li>
              <a href='https://www.freecodecamp.com/spelcaster'
                target='_blank'>
                <i className='fa fa-fw fa-free-code-camp' />
              </a>
            </li>
            <li>
              <a href='https://codepen.io/spelcaster'
                target='_blank'>
                <i className='fa fa-fw fa-codepen' />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/hugo-augusto-do-carmo-5415a442'
                target='_blank'>
                <i className='fa fa-fw fa-linkedin-square' />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/august_hugh'
                target='_blank'>
                <i className='fa fa-fw fa-twitter' />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    )
  }
}

export default Footer
