import React from 'react'
import PropTypes from 'prop-types'

class GithubProject extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render () {
    return (
      <div className='card project-card'>
        <img className='card-img' alt='Error 404' width='256px'
          src='https://cdn-images-1.medium.com/max/800/1*qdFdhbR00beEaIKDI_WDCw.gif' />
        <div className='card-img-overlay'>
          <h4 className='card-title'>{ this.props.title }</h4>
          <p className='card-text'>Page Description</p>
        </div>
      </div>
    )
  }
}

export default GithubProject
