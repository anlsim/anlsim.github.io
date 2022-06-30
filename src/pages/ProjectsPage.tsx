import NavBar from '../components/Navigation/NavBar'
import ProjectMenu from '../components/Project/ProjectMenu'
import Hero from '../components/Hero'
import '../styles/ProjectPage.scss'

type Props = {
  title: string
}
const ProjectsPage = ({ title }: Props) => {
  return (
    <main>
      <NavBar />
      <Hero title={title} />
      <ProjectMenu />
    </main>
  )
}

export default ProjectsPage
