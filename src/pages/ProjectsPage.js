import React from "react"
import NavBar from "../components/NavBar"
import ProjectMenu from "../components/ProjectMenu"
import SectionTitle from "../components/SectionTitle"
import "../styles/ProjectPage.scss"

const ProjectsPage = (props) => {
  return (
    <main>
      <NavBar />
      <SectionTitle title={props.title} />
      <ProjectMenu />
    </main>
  )
}

export default ProjectsPage
