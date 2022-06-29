import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../styles/_custom-card.scss'

type Props = {
  title: string,
  skillItem: {
    name: string,
    fAwesome?: string,
  }[]
}

const Skill = ({ title, skillItem }: Props) => (
  <div className='custom-card'>
    <div className='custom-card__header'>
      <h2 className='custom-card__title'>{title}</h2>
    </div>
    <div className='custom-card__body'>
      {skillItem.map((item, key) => {
        return (
          <div key={key} className='custom-card__tools'>
            <i className={item.fAwesome}></i>
            {item.name}
          </div>
        )
      })}
    </div>
  </div>
)

export default withRouter(Skill)
