import React from 'react'
// import axios from 'axios'

import GithubProject from './GithubProject'

class GithubSection extends React.Component {
  state = {
    apiUrl: 'https://api.github.com/users/spelcaster/repos'
  }

  componentWillMount () {
    /*
    axios.get(this.state.apiUrl)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
      */
  }

  render () {
    return (
      <div id='github-section' className='row'>
        <GithubProject title='Project Title' />
      </div>

    )
  }
}

export default GithubSection
