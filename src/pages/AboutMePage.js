import React from 'react';
import SectionTitle from '../components/SectionTitle';

const AboutMePage = (props) => {
    return (
      <>
      <SectionTitle  title={props.title}/>
      <div className="container pt-2">
       
        <div className="container bg-primary pt-5">
          <div className="row center">
              <div className="col"><img src="" alt=""></img></div>
              <div className="col">
                <h4>Collaborative and creative Software Developer with a keen interest in building responsive and scalable web apps to enhance user experience. Fluent in Spanish and English, accustomed to working with cross-cultural, global teams. </h4>
              </div>
          </div>
        </div>
        <br/>
        <div className="container  bg-light pt-5">Education</div>
      </div>
      </>
      
       
         
        
    )
}

export default AboutMePage;