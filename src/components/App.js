import './sass/app.scss'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AboutSection from './AboutSection'
import GithubSection from './GithubSection'
import CodepenSection from './CodepenSection'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='container'>
          <AboutSection />
          <CodepenSection />
          <GithubSection />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
