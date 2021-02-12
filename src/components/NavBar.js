import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.scss';

const NavBar = () => {

    return (
        <nav className ="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className='options'>
                  <Link className='option' to="/Resume">Resume</Link>
                  
                  <Link className='option' to="/projects">Projects</Link>
                  
                  <Link className='option' to="/contact">Contact</Link>
                 

              </div>
             
            
            
          </div>
        </div>
      </nav>

    );
}

    
    export default NavBar;