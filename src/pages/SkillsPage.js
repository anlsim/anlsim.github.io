import React from 'react'
import Hero from '../components/Hero'
import NavBar from '../components/Navigation/NavBar'
import SkillsMenu from '../components/Skill/SkillsMenu'

const SkillsPage = (props) => {
  return (
    <main>
      <NavBar />
      <Hero title={props.title} />
      <SkillsMenu />
    </main>
  )
}

export default SkillsPage
