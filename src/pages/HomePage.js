import React from 'react'
import '../styles/HomePage.scss'
import DirectoryMenu from '../components/DirectoryMenu'
import Particles from 'react-particles-js'

const HomePage = () => {
  return (
    <div className='homepage'>
      <Particles
        className='homepage__particles'
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            color: {
              value: '#30323D',
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 10,
              },
            },
            line_linked: {
              color: {
                value: '#E8C547',
              },
            },
          },
        }}
      />
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
