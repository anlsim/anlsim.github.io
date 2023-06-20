import HomeMenuItem from '../../Components/HomeMenuItem/HomeMenuItem'

import './Home.scss'

const menuData = [
  {
    title: 'About Me',
    id: 1,
    linkUrl: 'about',
  },
  {
    title: 'Projects',
    id: 2,
    linkUrl: 'projects',
  },
  {
    title: 'Skills',
    id: 3,
    linkUrl: 'skills',
  },
  {
    title: 'Contact',
    id: 4,
    linkUrl: 'contact',
  },
]

const Home = () => {
  return (
    <>
    <div className='home__intro'>
      <h1 className='home__title'>Hi, I'm Andrea</h1>
      <p className='home__description'>I'm a Sofware Developer that believes in building
        things for enviromental, social and economic good.</p>
   </div>
   <div className='home__bottom'></div>
   <div className='home'>
      <div className='home__menuItems'>
      {menuData.map((item, index) => {
        return (
          <HomeMenuItem
            title={item.title}
            linkUrl={item.linkUrl}
            key={index}
          />
        )
      })}
      </div>
    </div>
    </>
  )
}

export default Home
