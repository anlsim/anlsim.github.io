import React from 'react'
import Project from './Project'
import '../../styles/DirectoryMenu.scss'

class ProjectMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [
        {
          title: 'Travel Blog',
          description:
            'Built a Fullstack travel blog using React with Javascript for the front end and NodeJs with MongoDB for the backend',
          imgUrl: '',
          id: 1,
          gitUrl: 'https://github.com/anlsim/travel-blog',
          tools: [
            {
              name: '',
              fAwasome: 'fab fa-react',
            },
            {
              name: '',
              fAwasome: 'fab fa-js-square',
            },
            {
              name: '',
              fAwasome: 'fab fa-node',
            },
            {
              name: 'MongoDB',
              fAwasome: '',
            },
            {
              name: '',
              fAwasome: 'fab fa-sass',
            },
            {
              name: '',
              fAwasome: 'fab fa-bootstrap',
            },
          ],
          linkUrl:
            'https://warm-escarpment-05416.herokuapp.com/register',
        },
        {
          title: 'Personal Portfolio',
          description:
            'Built a web portfolio to show projects, skills, and other relevant information',
          imgUrl: '../assets/webMarks.png',
          id: 1,
          gitUrl:
            'https://github.com/anlsim/anlsim.github.io',
          tools: [
            {
              name: '',
              fAwasome: 'fab fa-react',
            },
            {
              name: '',
              fAwasome: 'fab fa-sass',
            },

            {
              name: '',
              fAwasome: 'fab fa-bootstrap',
            },
          ],
          linkUrl: 'https://anlsim.github.io/',
        },
        {
          title: 'Web Marks',
          description:
            'Built a web application that allows people to save and organize web URLs on boards based on specific subjects or collections.',
          imgUrl: '../assets/webMarks.png',
          id: 2,
          gitUrl: 'https://github.com/anlsim/WebMarks',
          tools: [
            {
              name: 'C#',
              fAwasome: '',
            },
            {
              name: 'ASP.NET',
              fAwasome: '',
            },
            {
              name: 'MVC',
              fAwasome: '',
            },
            {
              name: '',
              fAwasome: 'fab fa-css3-alt',
            },
            {
              name: '',
              fAwasome: 'fab fa-bootstrap',
            },
          ],
          linkUrl: '',
        },
        {
          title: 'Task Tracker',
          description:
            'Team project to build a web application to help organize and keep track of tasks. Redesigned the View. Added new features to optimize the project.',
          imgUrl: '../assets/webMarks.png',
          id: 3,
          gitUrl: 'https://github.com/anlsim/TimeTracker',
          tools: [
            {
              name: 'C#',
              fAwasome: '',
            },
            {
              name: 'ASP.NET',
              fAwasome: '',
            },
            {
              name: 'MVC',
              fAwasome: '',
            },
            {
              name: '',
              fAwasome: 'fab fa-css3-alt',
            },
            {
              name: '',
              fAwasome: 'fab fa-bootstrap',
            },
          ],
          linkUrl: '',
        },
        {
          title: 'Photography Portfolio',
          description:
            'Personal photography portfolio. Built with HTML and Bootstrap',
          imgUrl: '../assets/webMarks.png',
          id: 4,
          gitUrl:
            'https://github.com/anlsim/photography_website',
          tools: [
            {
              name: '',
              fAwasome: 'fab fa-html5',
            },
            {
              name: '',
              fAwasome: 'fab fa-css3-alt',
            },
            {
              name: '',
              fAwasome: 'fab fa-bootstrap',
            },
          ],
          linkUrl:
            'https://anlsim.github.io/photography_website/',
        },
      ],
    }
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.projects.map(
          ({ id, ...otherProjectProps }) => (
            <Project key={id} {...otherProjectProps} />
          )
        )}
      </div>
    )
  }
}

export default ProjectMenu
