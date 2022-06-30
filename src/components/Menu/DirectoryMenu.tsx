import React, { Component } from 'react'
import '../../styles/DirectoryMenu.scss'
import MenuItem from './MenuItem'

const DirectoryMenu = () => {
  const menuData = {
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

  return (
    <div className='directory-menu'>
      {menuData.sections.map(({ id, ...SectionProps }) => (
        <MenuItem key={id} {...SectionProps} />
      ))}
    </div>
  )
}

export default DirectoryMenu
