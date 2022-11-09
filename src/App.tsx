import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './Pages/Home/Home'
import ContactMe from './Pages/Contact/ContactMe'
import Projects from './Pages/Projects/Projects'
import Skills from './Pages/Skills/Skills'
import AboutMe from './Pages/About/AboutMe'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

const App = () => {
  const location = useLocation();
  return (
    <div className='pageContainer'>
  <div className="contentWrap ">
      {location.pathname === '/' ? null : <NavBar />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>
      </div>
      <Footer/>
   
    </div>
  )
}

export default App
