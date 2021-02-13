import React, {Component} from 'react';
import Project from './Project';
import '../styles/DirectoryMenu.scss';

class ProjectMenu extends Component {
    constructor(){
        super();
        this.state ={
            sections:  [{
                
                title: 'Web Marks',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue eu.',
                imageUrl: 'commingsoon',
                id: 1,
                gitUrl:'',
                linkUrl:'',
            

            },
            {
                
                title: 'Task Tracker',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue eu.',
                imageUrl: 'commingsoon',
                id: 2,
                gitUrl:'',
                linkUrl:'',
                
            },
            {
                
                title: 'Photography Portfolio',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra vitae congue eu.',
                imageUrl: 'commingsoon',
                id: 3,
                gitUrl:'',
                linkUrl:'',

                
            },


            ]
        };
    }
    render(){
        return(
           
            <div className= 'directory-menu'>
               
               {
                    this.state.sections.map(({id, ...SectionProps}) => (
                        <Project key={id} {...SectionProps}/>
                    ))
                }
              
            </div>
           
        );

    }
}

export default ProjectMenu;
