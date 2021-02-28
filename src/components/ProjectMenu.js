import React from 'react';
import Project from './Project';
import '../styles/DirectoryMenu.scss';


class ProjectMenu extends React.Component {
    constructor(){
        super();
        this.state ={
            projects:  [{
                
                title: 'Web Marks',
                description: 'Built a web application that allows people to save and organize web URLs on boards based on specific subjects or collections.',
                imgUrl: '../assets/webMarks.png',
                id: 1,
                gitUrl: 'https://github.com/anlsim/WebMarks',
                linkUrl:'',
            

            },
            {
                
                title: 'Task Tracker',
                description: 'Team project to build a web application to help organize and keep track of tasks. Redesigned the View. Added new features to optimize the project.',
                imgUrl: '../assets/webMarks.png',
                id: 2,
                gitUrl:'https://github.com/anlsim/TimeTracker',
                linkUrl:'',
                
            },
            {
                
                title: 'Photography Portfolio',
                description: 'Personal photography portfolio. Built with HTML and Bootstrap',
                imgUrl: '../assets/webMarks.png',
                id: 3,
                gitUrl:'https://github.com/anlsim/photography_website',
                linkUrl:'',

            },
       
            ]
        };
    }
    render(){
        return(
            <>
            <div className='row'>
               {
                    this.state.projects.map(({id, ...otherProjectProps}) => (
                        <Project key={id} {...otherProjectProps}/>
                    ))
                }
              
            </div>
            </>
           
        );

    }
}

export default ProjectMenu;
