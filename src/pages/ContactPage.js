import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import SectionTitle from '../components/SectionTitle'
import NavBar from '../components/NavBar'
import '../styles/ContacPage.scss'

const ContactPage = (props) => {
  return (
    <>
      <NavBar />

      <SectionTitle title={props.title} />
      <div className='contact'>
        <div className='contact__icon'>
          <a
            className='contact__icon-color'
            href='https://github.com/anlsim'
            target='blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className='contact__icon'>
          <a
            className='contact__icon-color'
            href='https://www.linkedin.com/in/andrea-simental/'
            target='blank'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </>
  )
}

export default ContactPage
