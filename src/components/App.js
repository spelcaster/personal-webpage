import './sass/app.scss'

import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import AboutSection from './AboutSection'
import GithubSection from './GithubSection'
import CodepenSection from './CodepenSection'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-12 col-md-3'>
            <Navigation />
          </div>
          <div className='col-12 col-md-9'>
            <AboutSection />
            <CodepenSection />
            <GithubSection />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
