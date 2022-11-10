import { SimpleGrid, Card, Container } from '@mantine/core'

import Hero from '../../Components/Hero/Hero'
import Project from 'Components/Project/Project'

import { projects } from './ProjectsData'

import './Projects.scss'

const Projects = () => {
  return (
    <div>
      <Hero title={'Projects'} />
      <Container py={100} className='projects'>
      <SimpleGrid cols={3} breakpoints={[ 
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' }]}>
      {
          projects.map((item, id)=> (
            <Project key={id} title={item.title} description={item.description} tools={item.tools}/>
          ))
        }
      </SimpleGrid>
      </Container >
      {/* <div className='projects'>
        
  
      </div> */}
    </div>
  )
}

export default Projects
