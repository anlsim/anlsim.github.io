import React from 'react'
import NavBar from '../components/Navigation/NavBar'
import ProjectMenu from '../components/Project/ProjectMenu'
import SectionTitle from '../components/SectionTitle'
import '../styles/ProjectPage.scss'

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
