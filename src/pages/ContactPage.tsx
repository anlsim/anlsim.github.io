import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Hero from '../components/Hero'
import NavBar from '../components/Navigation/NavBar'
import '../styles/ContacPage.scss'

type Props = {
  title: string
}

const ContactPage = ({ title }: Props) => {
  return (
    <>
      <NavBar />
      <Hero title={title} />
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
