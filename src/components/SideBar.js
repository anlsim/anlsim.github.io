import { Link } from 'react-router-dom'
import '../styles/SideBar.scss'

export default function SideBar({
  clicked,
  handleClicked,
}) {
  return (
    <>
      {clicked && (
        <ul className='sideBar__menu active'>
          <li className='navBar__menu__links'>
            <Link to='/About' onClick={handleClicked}>
              About Me
            </Link>
          </li>
          <li className='navBar__menu__links'>
            <Link to='/projects' onClick={handleClicked}>
              Projects
            </Link>
          </li>
          <li className='navBar__menu__links'>
            <Link to='/Skills' onClick={handleClicked}>
              Skills
            </Link>
          </li>

          <li className='navBar__menu__links'>
            <Link to='/contact' onClick={handleClicked}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </>
  )
}
