import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../styles/custom.scss';
const NavBar = () => {
    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">Andrea Simental</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
            <Link className="nav-link" to="/About">About Me</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/Resume">Resume</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
    )

    
}

    
    export default NavBar;