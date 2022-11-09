import { Link } from 'react-router-dom'
import './MobileNav.scss'

type Props = {
  clicked: boolean,
  handleClicked?: any,
}

const MobileNav = ({ clicked, handleClicked }: Props) => {
  return (
    <>
      {clicked && (
        <ul className='mobilenav__menu active'>
           <Link to='/About' onClick={handleClicked}> <li className='navbar__links'>About Me </li></Link>
          <Link to='/projects' onClick={handleClicked}><li className='navbar__links'>Projects</li></Link>
          <Link to='/Skills' onClick={handleClicked}><li className='navbar__links'>Skills</li></Link>
          <Link to='/contact' onClick={handleClicked}><li className='navbar__links'>Contact</li></Link>
     
        </ul>
      )}
    </>
  )
}

export default MobileNav
