import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import SectionTitle from '../components/SectionTitle';
import NavBar from '../components/NavBar';

const ContactPage = (props) => {
    return (
        <>
          
        <NavBar />
     
        <SectionTitle title={props.title}/>
        <div className="container">

            <div className="row">
                       
                <div className="col">
                    <h1>Contact Me</h1>
                    <h2>
                        <a href="https://github.com/anlsim" target="blank">
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </h2>
                    <h2>
                        <a href="https://www.linkedin.com/in/andrea-simental/" target="blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </h2>
                                               
                </div>
            </div>
        </div>
    </>
         
    )
}


export default ContactPage;
