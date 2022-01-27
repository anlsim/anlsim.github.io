import React from 'react'
import '../styles/HomePage.scss'
import DirectoryMenu from '../components/Menu/DirectoryMenu'
import Particles from 'react-tsparticles'

const HomePage = () => {
  return (
    <div className='homepage'>
      <Particles
        className='homepage__particles'
        options={{
          fpsLimit: 30,
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          particles: {
            color: {
              value: '#BCBCC8',
              animation: {
                enable: true,
                speed: 60,
              },
            },
            links: {
              enable: true,
              color: {
                value: '#E8C547',
              },
            },
            move: {
              direction: 'bottom',
              enable: true,
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: 'polygon',
            },
            size: {
              value: 3,
            },
          },
          detectRetina: true,
          emitters: {
            direction: 'none',
            rate: {
              quantity: 1,
              delay: 1,
            },
            position: {
              x: 50,
              y: 50,
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
