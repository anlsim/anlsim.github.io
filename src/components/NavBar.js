import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

class NavBar extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
      this.setState({toggle:!this.state.toggle})
    }
    render(){
    return (
      <nav className ="navMenu">
        
          <Link className='navMenu-logo' to="/">Andrea Simental</Link>
          <button className="navMenu-burger" onClick={this.Toggle}><FontAwesomeIcon icon={faBars}/></button>
          
         
              <div className='navMenu-options'>
                  <Link className='navMenu-option' to="/About">About Me</Link>
                  <Link className='navMenu-option' to="/Resume">Resume</Link>
                  
                  <Link className='navMenu-option' to="/projects">Projects</Link>
                  
                  <Link className='navMenu-option' to="/contact">Contact</Link>
                 

              </div>
             
            
      </nav>

    );
    }
}

    
    export default NavBar;