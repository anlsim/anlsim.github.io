import Hero from '../components/Hero'
import NavBar from '../components/Navigation/NavBar'
import SkillsMenu from '../components/Skill/SkillsMenu'

type Props = {
  title: string
}
const SkillsPage = ({title}:Props) => {
  return (
    <main>
      <NavBar />
      <Hero title={title} />
      <SkillsMenu />
    </main>
  )
}

export default SkillsPage
