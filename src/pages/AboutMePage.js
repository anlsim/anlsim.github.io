import React from 'react'
import SectionTitle from '../components/SectionTitle'
import NavBar from  '../components/Navigation/NavBar'
import '../styles/Aboutme.scss'

const AboutMePage = (props) => {
  return (
    <>
      <NavBar />
      <SectionTitle title={props.title} />
      <div className='container'>
        <div className='aboutme'>
          <div className='aboutme__img'></div>
          <div className='aboutme__info'>
            <h2 className='aboutme__info__title'>
              Andrea Simental
            </h2>
            <p className='aboutme__info__description'>
              Collaborative and creative Software Developer
              with a keen interest in building responsive
              and scalable web apps to enhance user
              experience. Fluent in Spanish and English,
              accustomed to working with cross-cultural,
              global teams.
            </p>
          </div>
        </div>
        <h2 className='container__title'>Experience</h2>
        <div className='container__main'>
          <h3 className='container__subtitle'>
            Junior Developer • July 2021 - Present
          </h3>
          <p className='container__subtitle-main'>
            D2 Creative• Full Time
          </p>
          <p className='container__description'>
            Currently developing websites on a variety of
            platforms, using multiple frameworks and
            programing languages.
          </p>
        </div>
        <div className='container__main'>
          <h3 className='container__subtitle'>
            Frontend Developer • March - July 2021
          </h3>
          <p className='container__subtitle-main'>
            Impakter • Internship
          </p>
          <p className='container__description'>
            Design and develop the frontend of the
            Certificates Tool application while utilizing
            reusable code with Vue.js and Bootstrap. to
            complete projects in the future. Designed UI
            wireframes using Figma. Developed Frontend with
            Vue.js and Bootstrap.
            <br />
            <br />
            • Designed UI wireframes using Figma.
            <br />
            • Created UI of the certificate tool to detect
            environmental or social impact for companies.
            <br />• Transformed business and functional
            needs into documented technical specifications
            in collaboration with team members.
          </p>
        </div>
      </div>
      <div className='container'>
        <h2 className='container__title'>Education</h2>
        <div className='container__main'>
          <h3 className='container__subtitle'>
            BACHELOR’S OF APPLIED SCIENCE DEGREE • 2019 -
            2021
          </h3>
          <p className='container__subtitle-main'>
            Computing and Software Development • GPA: 3.71
          </p>
          <p className='container__description'>
            Lake Washington Institute of Technology •
            Seattle, WA
          </p>
        </div>
        <div className='container__main'>
          <h3 className='container__subtitle'>
            ASSOCIATE’S OF APPLIED SCIENCE • 2017 - 2019
          </h3>
          <p className='container__subtitle-main'>
            Computing and Software Development • GPA: 3.68
          </p>
          <p className='container__description'>
            Lake Washington Institute of Technology •
            Seattle, WA
          </p>
        </div>
        <div className='container__main'>
          <h3 className='container__subtitle'>
            BACHELOR’S DEGREE • 2007 - 2011
          </h3>
          <p className='container__subtitle-main'>
            Graphic Design • GPA: 3.80
          </p>
          <p className='container__description'>
            Universidad de Guadalajara - CUAAD •
            Guadalajara, MX
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutMePage
