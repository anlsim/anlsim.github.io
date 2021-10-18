import React from 'react';
import SectionTitle from '../components/SectionTitle';
import NavBar from '../components/NavBar';
import '../styles/Aboutme.scss';

const AboutMePage = (props) => {
    return (
      <>
      <NavBar />
      <SectionTitle  title={props.title}/>  
      <div className="aboutme">
          <div className="aboutme__img">
            {/* <span className="img"></span> */}
          </div>
          <div className="aboutme__info">
            <h2 className="aboutme__info__title">Andrea Simental</h2>
            <p className="aboutme__info__description">
              Collaborative and creative Software Developer with 
              a keen interest in building responsive and scalable
               web apps to enhance user experience. Fluent in 
               Spanish and English, accustomed to working with 
               cross-cultural, global teams.
            </p>
          </div>
      </div>
      <br/>
      <div className="container">
        <h2 className="education-title">Experience</h2>
        <div className ="jumbotron">
          <h3 className="degree">Junior Developer • July  - Present</h3>
          <p className="degree__title">D2 Creative• Full Time</p>
          <p className="degree__address">
            Currently developing websites on a variety of platforms.
          </p>
        </div>
        <div className ="jumbotron">
          <h3 className="degree">Frontend Developer • March  - July 2021</h3>
          <p className="degree__title">Impakter • Internship</p>
          <p className="degree__address">
              Design and develop the frontend of the
              Certificate application while utilizing reusable code
              with Vue.js and Bootstrap. to complete projects in the future.
              Designed UI wireframes using Figma. Developed Frontend with
              Vue.js and Bootstrap.<br/><br/>
              •	Designed and developed UI wireframes using Figma.<br/>
              •	Created UI of the certificate tool to detect environmental or social impact for companies.<br/>
              •	Transformed business and functional needs into documented technical
               specifications in collaboration with team members.
          </p>
        </div>
      </div>
        <div className="container pt-5">
          <h2 className="education-title">Education</h2>
          <div className ="jumbotron">
            <h3 className="degree">BACHELOR’S OF APPLIED SCIENCE DEGREE • 2019 - 2021</h3>
            <p className="degree__title">Computing and Software Development • GPA: 3.71</p>
            <p className="degree__address">Lake Washington Institute of Technology • Seattle, WA</p>
          </div>
          <div className ="jumbotron">
            <h3 className="degree">ASSOCIATE’S OF APPLIED SCIENCE • 2017 - 2019</h3>
            <p className="degree__title">Computing and Software Development • GPA: 3.68</p>
            <p className="degree__address">Lake Washington Institute of Technology • Seattle, WA</p>
          </div>
          <div className ="jumbotron">
            <h3 className="degree">BACHELOR’S DEGREE • 2007 - 2011</h3>
            <p className="degree__title">Graphic Design • GPA: 3.80</p>
            <p className="degree__address">Universidad de Guadalajara - CUAAD • Guadalajara, MX</p>
          </div>
        </div>
      </>
    )
}

export default AboutMePage;