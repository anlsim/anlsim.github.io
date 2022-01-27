import { useState } from 'react'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import '../../styles/navBar.scss'
// import "../styles/custom.scss"
const NavBar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClicked = () => {
    setClicked(!clicked)
  }
  return (
      <nav className='navBar'>
        <Link className='navBar__logo' to='/'>
          Andrea Simental
        </Link>
        <div
          className='navBar__icon'
          onClick={handleClicked}>
          <i
            className={
              clicked ? 'fas fa-times' : 'fas fa-bars'
            }></i>
        </div>
        <SideBar
          clicked={clicked}
          handleClicked={handleClicked}></SideBar>
        <ul className='navBar__menu'>
          <li className='navBar__menu__links'>
            <Link to='/About'>About Me</Link>
          </li>
          <li className='navBar__menu__links'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='navBar__menu__links'>
            <Link to='/Skills'>Skills</Link>
          </li>

          <li className='navBar__menu__links'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar
