import React from 'react'
import axios from 'axios'

import Project from './Project'

class GithubSection extends React.Component {
  state = {
    apiUrl: 'https://api.github.com/users/spelcaster/repos',
    repos: []
  }

  componentWillMount () {
    var self = this
    axios.get(this.state.apiUrl)
      .then(function (response) {
        // filter out forked repositories
        self.getRepoList(
          response.data.filter((repo) => { return !repo.fork })
        )
      })
  }

  getRepoList = (repos) => {
    var projects = repos.map((repo) => {
      return {
        id: repo.id,
        title: repo.name,
        description: repo.description,
        links: [
          {
            url: repo.html_url,
            text: 'View project'
          }
        ],
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        is_popular: (repo.stargazers_count > 0)
      }
    })

    this.setState({repos: projects})
  }

  renderProject = (project, index) => {
    return (
      <Project key={index}
        id={index}
        title={project.title}
        description={project.description}
        links={project.links}
        colClass='col-sm-6' />
    )
  }

  render () {
    return (
      <div id='github-section'>
        <h2>Github</h2>
        <div className='row'>
          {this.state.repos.map(this.renderProject)}
        </div>
      </div>

    )
  }
}

export default GithubSection
