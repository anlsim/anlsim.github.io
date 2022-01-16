import { Link } from 'react-router-dom'
import '../styles/SideBar.scss';

export default function SideBar({
  clicked,
  handleClicked,
}) {


  return (
    <>
      {clicked && (
        <ul className='sideBar__menu active'>
          <li className="navBar__menu__links">
            <Link to="/About">
              About Me
            </Link>
          </li>
          <li className="navBar__menu__links">
            <Link to="/projects">
              Projects
            </Link>
          </li>
          <li className="navBar__menu__links">
            <Link to="/Skills">
              Skills
            </Link>
          </li>

          <li className="navBar__menu__links">
            <Link to="/contact">
              Contact
            </Link>
          </li> 
      </ul>
      )}
    </>
  )
}
