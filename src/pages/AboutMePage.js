import React from 'react';
import SectionTitle from '../components/SectionTitle';
import NavBar from '../components/NavBar';
import '../styles/aboutme.scss';

const AboutMePage = (props) => {
    return (
      <>
      <NavBar />
      <SectionTitle  title={props.title}/>  
      <div className="aboutMe">
        <div className="row">
        <div className="img col-sm-4">
          <span className="img"></span>
        </div>
          <div className="aboutInfo col-sm-8">
            <h1 className="aboutInfo-title">Andrea Simental</h1>
            <p className="aboutInfo-description">Collaborative and creative Software Developer with a keen interest in building responsive and scalable web apps to enhance user experience. Fluent in Spanish and English, accustomed to working with cross-cultural, global teams.</p>

          </div>
          
      </div>
      </div>
       
        <br/>
        <div className="container pt-5">
          <h1 className="education-title">Experience</h1>
          <div className ="jumbotron">
            <h2 className="degree">Frontend Developer • March 2021 - Present</h2>
            <h3 className="degree-title">Impakter • Internship</h3>
            <h4 className="degree-address">Currently working with a global team
             developing reusable code components
             to complete projects in the future. Designed UI
            wireframes using Figma. Developed Frontend with
              Vue.js and Bootstrap.
            </h4>
          </div>
        </div>
        <div className="container pt-5">
          <h1 className="education-title">Education</h1>
          <div className ="jumbotron">
            <h2 className="degree">BACHELOR’S OF APPLIED SCIENCE DEGREE • 2019 - 2021</h2>
            <h3 className="degree-title">Computing and Software Development • GPA: 3.71</h3>
            <h4 className="degree-address">Lake Washington Institute of Technology • Seattle, WA</h4>
          </div>
          <div className ="jumbotron">
            <h2 className="degree">ASSOCIATE’S OF APPLIED SCIENCE • 2017 - 2019</h2>
            <h3 className="degree-title">Computing and Software Development • GPA: 3.68</h3>
            <h4 className="degree-address">Lake Washington Institute of Technology • Seattle, WA</h4>
          </div>
          <div className ="jumbotron">
            <h2 className="degree">BACHELOR’S DEGREE • 2007 - 2011</h2>
            <h3 className="degree-title">Graphic Design • GPA: 3.80</h3>
            <h4 className="degree-address">Universidad de Guadalajara - CUAAD • Guadalajara, MX</h4>
          </div>
        </div>
     
      
      </>
      
       
         
        
    )
}

export default AboutMePage;