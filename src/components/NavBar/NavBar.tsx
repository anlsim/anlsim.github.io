import { Link } from 'react-router-dom'
import { useState } from 'react'

import './NavBar.scss'
import MobileNav from '../MobileNav/MobileNav'

const NavBar = () => {

  const [clicked, setClicked] = useState(false)
  const handleClicked = () => {
    setClicked(!clicked)
  }

  return (
    <nav className='navbar'>
      <Link to='/'>
        <div className='navbar__logo'>
        Andrea Simental
        </div>
      </Link>
      <div className='navbar__menu-icon' onClick={handleClicked}>
        <i
          className={
            clicked ? 'fas fa-times' : 'fas fa-bars'
          }></i>
      </div>
      <MobileNav
        clicked={clicked}
        handleClicked={handleClicked}/>
      <ul className='navbar__menu'>
          <Link to='/About'> <li className='navbar__links'>About Me </li></Link>
          <Link to='/projects'><li className='navbar__links'>Projects</li></Link>
          <Link to='/Skills'><li className='navbar__links'>Skills</li></Link>
          <Link to='/contact'><li className='navbar__links'>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default NavBar
