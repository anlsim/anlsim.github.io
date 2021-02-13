import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';




const ContactPage = () => {
    return (
        <>
    <container>
        <div>
            <div>
            <h1>Andrea</h1>
            </div>
            <div>
            <h1>Contact Me</h1>
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
    </container>
    </>
         
    )
}


export default ContactPage;
