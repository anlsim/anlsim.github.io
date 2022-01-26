import React from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/_custom-card.scss'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

const Project = ({
  title,
  description,
  linkUrl,
  gitUrl,
  tools,
}) => (
  <div className='custom-card'>
    <div className='custom-card__header'>
      <h1 className='custom-card__title'>{title}</h1>
    </div>
    <div className='custom-card__body'>
      <p className='project__description'>{description}</p>
      <hr />
      <h2 className='custom-card__body-title'>
        Tools used
      </h2>
      <div className='custom-card__tools'>
        {tools.map((t, index) => {
          return (
            <>
              <p className='custom-card__tools-description' key={index}>
                {t.name}{' '}
              </p>
              <i className={t.fAwasome} />
            </>
          )
        })}
      </div>
    </div>
    <div className='custom-card__footer'>
      <a
        className='custom-card__footer-icon'
        href={gitUrl}
        target='blank'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      {linkUrl && (
        <a
          className='custom-card__footer-icon'
          href={linkUrl}
          target='blank'>
          <FontAwesomeIcon icon={faDesktop} />
        </a>
      )}
    </div>
  </div>
)

export default withRouter(Project)
