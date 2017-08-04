import React from 'react'

class Project extends React.Component {
  render () {
    return (
      <div className='card project-card'>
        <img className='card-img' alt='Error 404'
          src='https://cdn-images-1.medium.com/max/800/1*qdFdhbR00beEaIKDI_WDCw.gif' />
        <div className='card-img-overlay'>
          <h4 className='card-title'>Page Name :D</h4>
          <p className='card-text'>Page Description</p>
        </div>
      </div>
    )
  }
}

export default Project
