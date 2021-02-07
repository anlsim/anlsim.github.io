import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => (
    <>
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Travel Blog</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/education">Education</Nav.Link>
        </Nav>
      </Navbar>
        </>
    );
    export default NavBar;