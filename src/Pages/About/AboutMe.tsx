import Hero from "../../Components/Hero/Hero"
import AboutMeItem from "../../Components/AboutMeItem/AboutMeItem"

import { sections } from "./AboutMeData"
import './AboutMe.scss'


const AboutMe = () => {
  return (
    <>
      <Hero title={'About Me'}/>
      <div className='aboutMe'>
        <div className='aboutMe__introImg'></div>
        <div className='aboutMe__intro'>
          <h2 className='aboutMe__introTitle'>Andrea Simental</h2>
          <p className='aboutMe__introDescription'>Collaborative and creative Software Developer
                with a keen interest in building responsive
                and scalable web apps to enhance user
                experience. Fluent in Spanish and English,
                accustomed to working with cross-cultural,
                global teams.</p>
        </div>
        </div>
        {
          sections?.map((section, index) => {
            return(
              <AboutMeItem title={section.title} items={section.items} key={index}/>
            )
            
          })
        }
 
    </>
  )
}

export default AboutMe
