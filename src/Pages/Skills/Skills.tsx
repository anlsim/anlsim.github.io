import Hero from "../../Components/Hero/Hero"
import Skill from "../../Components/Skill/Skill"
import { skills } from './SkillsData'

import './Skills.scss'

const Skills = () => {
  return (
    <div>
     <Hero title={'Skills'} />
     <div className='skills'>
     {skills.map(({ id, ...item }) => (
          <Skill key={id} title={item.title}  skillItem={item.skillItem}/>
        ))}
     </div>
    </div>
  )
}

export default Skills