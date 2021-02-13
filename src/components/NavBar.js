import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

    return (
      <nav className ="navMenu">
        
          <Link className='navMenu-logo' to="/">Andrea Simental</Link>
          <div className="navMenu-burger"><FontAwesomeIcon icon={faBars}/></div>
          
         
              <div className='navMenu-options'>
                  <Link className='navMenu-option' to="/About">About Me</Link>
                  <Link className='navMenu-option' to="/Resume">Resume</Link>
                  
                  <Link className='navMenu-option' to="/projects">Projects</Link>
                  
                  <Link className='navMenu-option' to="/contact">Contact</Link>
                 

              </div>
             
            
      </nav>

    );
}

    
    export default NavBar;