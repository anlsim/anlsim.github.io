import React from 'react'
import Project from './Project'
import '../../styles/DirectoryMenu.scss'
import { projects } from './ProjectsData'

export default function ProjectMenu() {
  return (
    <div className='directory-menu'>
      {projects.map(({ id, ...otherProjectProps }) => (
        <Project key={id} {...otherProjectProps} />
      ))}
    </div>
  )
}
