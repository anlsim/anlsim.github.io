import '../../styles/HomePage.scss'
import DirectoryMenu from '../../components/Menu/DirectoryMenu'
import Particle from './Particle'

const HomePage = () => {
  return (
    <div className='homepage'>
      <Particle />
      <div className='homepage__header'>
        <h1 className='homepage__header--title'>
          Hi, I'm Andrea
        </h1>
        <p className='homepage__header--subtitle'>
          I'm a Sofware Developer that believes in building
          things for enviromental, social and economic good.
        </p>
      </div>
      <DirectoryMenu />
    </div>
  )
}

export default HomePage
