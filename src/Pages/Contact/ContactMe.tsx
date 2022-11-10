import Hero from "../../Components/Hero/Hero"

import './Contact.scss'

const ContactMe = () => {
  return (
    <div>
      <Hero title={'Contact Me'} />
      <div className='contact'>
        <div className='contact__icon'>
          <a
            className='contact__icon-color'
            href='https://github.com/anlsim'
            target='blank'>
            <i className='fab fa-github'></i>
          </a>
        </div>

        <div className='contact__icon'>
          <a
            className='contact__icon-color'
            href='https://www.linkedin.com/in/andrea-simental/'
            target='blank'>
            <i className='fab fa-linkedin'></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
