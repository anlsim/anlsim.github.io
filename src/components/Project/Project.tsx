import './Project.scss'

type Props = {
  title: string
  description: string
  tools: {
    name: string
    fAwasome: string
  }[]
}
const Project = ({ title, description, tools }: Props) => {
  return (
    <div className='project'>
      <div className='project__header'>
        <h2 className='project__title'>{title}</h2>
      </div>
      <div className='project__body'>
        <p>{description}</p>
         
          <h3 className='project__bodyTitle'>Technology used</h3>
          <div className={'project__tools'}>
          {tools.map((tool, index) => (
            <div key={index} className="project__icon">
            <i className={tool.fAwasome}>{tool.name}</i>
            </div>
          ))}
      </div>
      </div>
    </div>
  )
}

export default Project
