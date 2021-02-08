import React, {Component} from 'react';
import { BrowserRouter as Router,
Route,
} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ContactPage';

function App() {
  return (
    <>
    <Router>
      <div>
          <NavBar />
      </div>
      <div>
          <Route path="/" component= {HomePage} exact/>
          <Route path="/resume" component= {ResumePage} />
          <Route path="/projects" component= {ProjectsPage} />
          <Route path="/contact" component= {ContactPage} />
      </div>
      
    </Router>
    
    <div></div>
   </>
  );
}

export default App;
