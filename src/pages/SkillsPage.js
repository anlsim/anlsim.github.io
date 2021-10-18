import React from "react"
import SectionTitle from "../components/SectionTitle"
import NavBar from "../components/NavBar"
import SkillsMenu from "../components/SkillsMenu"

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
