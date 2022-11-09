import Hero from '../../Components/Hero/Hero'
import Project from 'Components/Project/Project'

import { projects } from './ProjectsData'

import './Projects.scss'

const Projects = () => {
  return (
    <div>
      <Hero title={'Projects'} />
      <div className='projects'>
        {
          projects.map((item, id)=> (
            <Project key={id} title={item.title} description={item.description} tools={item.tools}/>
          ))
        }
  
      </div>
    </div>
  )
}

export default Projects
