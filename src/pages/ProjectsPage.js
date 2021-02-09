import React, {Component} from 'react';
import '../styles/DirectoryMenu.scss';
import MenuItem from '../components/MenuItem';

class ProjectsPage extends Component {
    constructor(){
        super();
        this.state ={
            sections:  [{
                title: 'Web Marks',
                imageUrl: 'commingsoon',
                id: 1
            },
            {
                title: 'Task Tracker',
                imageUrl: 'commingsoon',
                id: 2
            },
            {
                title: 'Photography Portfolio',
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
                    this.state.sections.map(({title, imageUrl, id}) => (
                        <MenuItem key={id} title={title}/>
                    ))
                }
              
            </div>
        );
    }
}

export default ProjectsPage;
