import React, { Component } from 'react'
import '../../styles/DirectoryMenu.scss'
import MenuItem from './MenuItem'
class DirectoryMenu extends Component {
  constructor() {
    super()
    this.state = {
      sections: [
        {
          title: 'About Me',
          id: 1,
          linkUrl: 'about',
        },
        {
          title: 'Projects',
          id: 2,
          linkUrl: 'projects',
        },
        {
          title: 'Skills',
          id: 3,
          linkUrl: 'skills',
        },
        {
          title: 'Contact',
          id: 4,
          linkUrl: 'contact',
        },
      ],
    }
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(
          ({ id, ...SectionProps }) => (
            <div
            className='pentagon'
            onClick={() =>
              history.push(`${match.url}${linkUrl}`)
            }>
            <div className='pentagon__content'>
              <h1 className='pentagon__title'>
                {title.toUpperCase()}
              </h1>
            </div>
          </div>
          )
        )}
      </div>
    )
  }
}

export default DirectoryMenu
