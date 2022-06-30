import Particles from 'react-tsparticles'
export default function Particle() {
  return (
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
  )
}
