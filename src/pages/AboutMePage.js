import React from 'react';
import SectionTitle from '../components/SectionTitle';
import NavBar from '../components/NavBar';
import '../styles/aboutme.scss';

const AboutMePage = (props) => {
    return (
      <>
      <NavBar />
      <SectionTitle  title={props.title}/>  
        <div className="container pt-5">
          <div className="about">
              <div className="img"><img src="" alt=""></img></div>
              <div className="content">
                <h4>Collaborative and creative Software Developer with a keen interest in building responsive and scalable web apps to enhance user experience. Fluent in Spanish and English, accustomed to working with cross-cultural, global teams. </h4>
              </div>
          </div>
        </div>
        <br/>
        <div className="container pt-5">
          <h2>Education</h2>
          <div className ='jumbotron'>1</div>
          <div className ='jumbotron'>2</div>
          <div className ='jumbotron'>3</div>
        </div>
      
      </>
      
       
         
        
    )
}

export default AboutMePage;