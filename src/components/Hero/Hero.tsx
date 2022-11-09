
import './Hero.scss'

type Props = {
  title: string
}

const Hero = ({title}: Props) => {
  return (
    <div className='hero'>
        <h1 className='hero__title'>{title}</h1>
    </div>
  )
}
export default Hero