import { SimpleGrid } from '@mantine/core'

import Hero from '../../Components/Hero/Hero'
import Project from 'Components/Project/Project'

import { projects } from './ProjectsData'

import './Projects.scss'

const Projects = () => {
  return (
    <div>
      <Hero title={'Projects'} />
      <div className='projects'>
      <SimpleGrid cols={1} spacing={40} mt={0} breakpoints={[ 
        { minWidth: 1080, cols: 2, spacing: 80 },
        { minWidth: 760, cols: 2, spacing: 40 },
        { minWidth: 1480, cols: 3, spacing: 40 },]}>
      {
          projects.map((item, id)=> (
            <Project 
              key={id}
              title={item.title}
              description={item.description} 
              tools={item.tools} 
              gitUrl={item.gitUrl}
              webUrl={item.linkUrl}
              imgUrl={item.imgUrl}
            />
          ))
        }
      </SimpleGrid>
      </div >
      {/* <div className='projects'>
        
  
      </div> */}
    </div>
  )
}

export default Projects
