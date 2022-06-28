import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../styles/MenuItem.scss'

type Props = {
  title:  string,
  history: any,
  linkUrl: string,
  match: any
}

const MenuItem = ({ title, history, linkUrl, match }: Props) => (
    <div
      className='pentagon'
      onClick={() =>
        history.push(`${match.url}${linkUrl}`)
      }>
      <div className='pentagon__content'>
        <h2 className='pentagon__title'>
          {title.toUpperCase()}
        </h2>
      </div>
    </div>
)

export default withRouter(MenuItem)