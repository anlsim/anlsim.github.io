import React, {Component} from 'react';
import Project from './Project';
import '../styles/DirectoryMenu.scss';

class ProjectMenu extends Component {
    constructor(){
        super();
        this.state ={
            sections:  [{
                
                title: 'Web Marks',
                description: 'Comming soon',
                imageUrl: 'commingsoon',
                id: 1,
                linkUrl:'',

            },
            {
                
                title: 'Task Tracker',
                description: 'Comming soon',
                imageUrl: 'commingsoon',
                id: 2,
                linkUrl:''
                
            },
            {
                
                title: 'Photography Portfolio',
                description: 'Comming soon',
                imageUrl: 'commingsoon',
                id: 3,
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
