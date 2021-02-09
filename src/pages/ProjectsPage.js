import React, {Component} from 'react';
import '../styles/DirectoryMenu.scss';
import '../styles/Project.scss';
import Project from '../components/Project';

class ProjectsPage extends Component {
    constructor(){
        super();
        this.state ={
            sections:  [{
                title: 'Web Marks',
                description: 'Comming soon',
                imageUrl: 'commingsoon',
                id: 1
            },
            {
                title: 'Task Tracker',
                description: 'Comming soon',
                imageUrl: 'commingsoon',
                id: 2
            },
            {
                title: 'Photography Portfolio',
                description: 'Comming soon',
                imageUrl: 'commingsoon',
                id: 3
            },


            ]
        };
    }
    render(){
        return(
           
            <div className= 'directory-menu'>
               
                {
                    this.state.sections.map(({title, imageUrl, id, description}) => (
                        <Project key={id} title={title} description={description}/>
                
                    ))
                }
              
            </div>
           
        );

    }
}

export default ProjectsPage;
