import React, {Component} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import SkillsPage from './pages/SkillsPage';
import AboutMePage from './pages/AboutMePage';


class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      title: 'Andrea Simental',
      headerLinks: [
          {title: 'Home', path: '/'},
          {title: 'About Me', path: '/about'},
          {title: 'Projects', path: '/projecst'},
          {title: 'Resume', path: '/resume'},
          {title: 'Contact Me', path: '/contact'},
      ],
      home: {
        title: 'Andrea\'s Portfolio',
      },
      about: {
        title: 'About Me'
      },
      projects: {
        title: 'Projects'
      },
      skills: { 
        title: 'Skills'
      },
      contact: {
        title: 'Contact Me'
      }
    }
  }
  render(){
    return (
      <>
      
      <Router>
  
        <Switch>
            
                <Route path="/" exact render={() => <HomePage title={this.state.home.title}/> }/>
                <Route path="/about" render={() => <AboutMePage title={this.state.about.title} />}  />
                <Route path="/skills" render={() => <SkillsPage title={this.state.skills.title} />}  />
                <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} />}  />
                <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />}  />
            
        
        </Switch>
        
      </Router>
      
      <div></div>
     </>
    )

  }
  
}

export default App;
