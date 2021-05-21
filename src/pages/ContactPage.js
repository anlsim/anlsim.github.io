import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import SectionTitle from '../components/SectionTitle';
import NavBar from '../components/NavBar';
import '../styles/ContacPage.scss';

const ContactPage = (props) => {
    return (
        <>
          
        <NavBar />
     
        <SectionTitle title={props.title}/>
        <div className="contactContainer">
       
                    <h2 className='contactIcon'>
                        <a className='contactIcon-color' href="https://github.com/anlsim" target="blank">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </h2>
              
            
                    <h2 className='contactIcon'>
                        <a className='contactIcon-color' href="https://www.linkedin.com/in/andrea-simental/" target="blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </h2 >
       
        </div>
    </>
         
    )
}


export default ContactPage;
