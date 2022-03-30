import React from 'react'
import NavBar from '../components/Navigation/NavBar'
import ProjectMenu from '../components/Project/ProjectMenu'
import Hero from '../components/Hero'
import '../styles/ProjectPage.scss'

const ProjectsPage = (props) => {
  return (
    <main>
      <NavBar />
      <Hero title={props.title} />
      <ProjectMenu />
    </main>
  )
}

export default ProjectsPage
