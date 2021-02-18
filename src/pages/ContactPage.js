import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
    return (
        <>
        <div className="container">
            <div className="jumbotron"><h1>Contact Me</h1></div>
                <div className="row center">
                    <div className="col"><img src=""></img>Photo</div>
                    <div className="col">
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faPhoneSquareAlt} />
                        123-453-9876
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faEnvelope} />
                        email
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faLink} />LinkedIn
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
         
    )
}


export default ContactPage;
