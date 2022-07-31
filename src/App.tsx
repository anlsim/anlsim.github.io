import './App.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/Home/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import SkillsPage from './pages/SkillsPage'
import AboutMePage from './pages/AboutMePage'

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path='/' exact> <HomePage /></Route>
      <Route path='/projects' exact> <ProjectsPage title={'Projects'} /></Route>
      <Route path='/contact' exact> <ContactPage title={'Contact Me'} /></Route>
      <Route path='/skills' exact> <SkillsPage title={'Skills'} /></Route>
      <Route path='/about' exact> <AboutMePage title={'About Me'} /></Route>
      </Switch>
    </Router>
  )
}


export default App
