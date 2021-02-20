import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../components/SectionTitle';

const ContactPage = (props) => {
    return (
        <>
        <SectionTitle title={props.title}/>
        <div className="container">

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
