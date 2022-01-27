import React from 'react'
import Skill from './Skill'
import { skills } from './SkillsData'
import '../../styles/DirectoryMenu.scss'

export default function SkillsMenu() {
  return (
      <div className='directory-menu'>
        {skills.map(({ id, ...SectionProps }) => (
          <Skill key={id} {...SectionProps} />
        ))}
      </div>
  )
}
