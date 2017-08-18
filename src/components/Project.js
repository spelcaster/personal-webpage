import React from 'react'
import PropTypes from 'prop-types'

class Project extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    links: PropTypes.array,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    colClass: PropTypes.string
  }

  renderProjectImage = () => {
    if (!this.props.imageUrl) {
      return
    }

    return (
      <img className='project-img card-img'
        src={this.props.imageUrl} />
    )
  }

  renderProjectInfo = () => {
    let cardClass = 'card-block'

    if (this.props.imageUrl) {
      cardClass = 'card-img-overlay'
    }

    return (
      <div className={cardClass}>
        {this.renderTitle()}
        {this.renderDescription()}
      </div>
    )
  }

  renderTitle = () => {
    if (!this.props.title) {
      return (
        <h4 className='card-title' />
      )
    }

    return (
      <h4 className='card-title'>
        {this.props.title}
      </h4>
    )
  }

  renderDescription = () => {
    if (!this.props.description) {
      return (
        <p className='card-text' />
      )
    }

    return (
      <p className='card-text'>
        {this.props.description}
      </p>
    )
  }

  renderProjectLink = () => {
    if (!this.props.links) {
      return
    }

    return (
      <div className='card-block'>
        {this.props.links.map(this.renderLink)}
      </div>
    )
  }

  renderLink = (link, index) => {
    return (
      <a className='card-link'
        key={index}
        href={link.url}
        target='_blank'>
        {link.text}
      </a>
    )
  }

  render () {
    let colClass = this.props.colClass ? this.props.colClass : ''
    let cssClass = `card project-card ${colClass}`
    return (
      <div className={cssClass} >
        {this.renderProjectImage()}
        {this.renderProjectInfo()}
        {this.renderProjectLink()}
      </div>
    )
  }
}

export default Project
