import React from 'react'

import Project from './Project'

import { pens } from './pens'

class CodepenSection extends React.Component {
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
      <div id='codepen-section'>
        <h2>Codepen</h2>
        <div className='row'>
          {pens.map(this.renderProject)}
        </div>
      </div>

    )
  }
}

export default CodepenSection
