import './Skill.scss'

type Props = {
  title: string,
  skillItem: {
    name: string,
    fAwesome?: string,
  }[]
}

const Skill = ({title, skillItem}: Props) => {
  return(
    <div className='skill'>
      <div className='skill__header'>
        <h2 className='skill__title'>{title}</h2>
      </div>
      <div className='skill__body'>{
        skillItem.map((item, index) => {
          return(
            <div key={index} className="skill__icon">
              <i className={item.fAwesome}></i>
              {item.name}
            </div>
          )
        })
      }</div>
    </div>
  )
}

export default Skill