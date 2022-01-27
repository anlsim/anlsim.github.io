import React from 'react'
import SectionTitle from '../components/SectionTitle'
import NavBar from '../components/Navigation/NavBar'
import SkillsMenu from '../components/Skill/SkillsMenu'

const SkillsPage = (props) => {
  return (
    <main>
      <NavBar />
      <SectionTitle title={props.title} />
      <SkillsMenu />
    </main>
  )
}

export default SkillsPage
