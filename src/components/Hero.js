import React from 'react'
import '../styles/hero.scss'

const Hero = (props) => {
  return (
    <div className='hero'>
      <div className='hero__background'>
        <h1 className='hero__text'>{props.title}</h1>
      </div>
    </div>
  )
}
export default Hero
