import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ContactPage';
import AboutMePage from './pages/AboutMePage';

function App() {
  return (
    <>
    <Router>
      <div>
          <NavBar />
      </div>
      <Switch>
          <div>
              <Route path="/" component= {HomePage} exact/>
              <Route path="/about" component= {AboutMePage} />
              <Route path="/resume" component= {ResumePage} />
              <Route path="/projects" component= {ProjectsPage} />
              <Route path="/contact" component= {ContactPage} />
          </div>
      
      </Switch>
      
    </Router>
    
    <div></div>
   </>
  );
}

export default App;
