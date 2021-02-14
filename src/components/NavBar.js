import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link className='navMenu-logo' to="/">Andrea Simental</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Link className='navMenu-option' to="/About">About Me</Link>
            <Link className='navMenu-option' to="/Resume">Resume</Link>
            <Link className='navMenu-option' to="/projects">Projects</Link>
            <Link className='navMenu-option' to="/contact">Contact</Link>
                        
            
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
    </>
    )

    
}

    
    export default NavBar;