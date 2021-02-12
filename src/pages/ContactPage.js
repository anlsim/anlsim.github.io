import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';




const ContactPage = () => {
    return (
        <Container>
  <Row>
    <Col sm={8}>
        <h1>Andrea</h1>
    </Col>
    <Col sm={4}>
        <h1>Contact Me</h1>
        <ListGroup>
            <ListGroup.Item>
                <FontAwesomeIcon icon={faPhoneSquareAlt} />
                 123-453-9876
            </ListGroup.Item>
            <ListGroup.Item>
            <FontAwesomeIcon icon={faEnvelope} />
            email</ListGroup.Item>
            <ListGroup.Item>
            <FontAwesomeIcon icon={faLink} />LinkedIn</ListGroup.Item>
        </ListGroup>
    </Col>
  </Row>
 
</Container>
    )
}


export default ContactPage;
