import './sass/app.scss'

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import GithubSection from './GithubSection'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='container'>
          <GithubSection />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
