import { Link } from 'react-router-dom'
import './HomeMenuItem.scss'

type Props = {
  title: string
  linkUrl: string
}
const HomeMenuItem = ({ title, linkUrl }: Props) => {
  return (
    <Link to={linkUrl}>
      <div className='menuItem'>
        <h2 className='menuItem__title'>{title} </h2>
      </div>
    </Link>
  )
}

export default HomeMenuItem
