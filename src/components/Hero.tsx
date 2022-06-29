import React from 'react'
import '../styles/hero.scss'

type Props = {
  title: string
}

const Hero = ({title}) => {
  return (
    <div className='hero'>
      <div className='hero__background'>
        <h1 className='hero__text'>{title}</h1>
      </div>
    </div>
  )
}
export default Hero
