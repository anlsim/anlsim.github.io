import React, {Component} from 'react';
import '../styles/DirectoryMenu.scss';
import MenuItem from '../components/MenuItem';

class DirectoryMenu extends Component {
    constructor(){
        super();
        this.state ={
            sections:  [
            {
                title: 'About Me',
                imageUrl: 'commingsoon',
                id: 1,
                linkUrl: 'about'
            },
            {
                title: 'Resume',
                imageUrl: 'commingsoon',
                id: 2,
                linkUrl: 'resume'
            },
            {
                title: 'Projects',
                imageUrl: 'commingsoon',
                id: 3,
                linkUrl: 'projects'
            },
            {
                title: 'Contact',
                imageUrl: 'commingsoon',
                id: 4,
                linkUrl: 'contact'
            },
           



            ]
        };
    }
    render(){
        return(
            <div className= 'directory-menu'>
               
                {
                    this.state.sections.map(({id, ...SectionProps}) => (
                        <MenuItem key={id} {...SectionProps}/>
                    ))
                }
              
            </div>
        );
    }
}

export default DirectoryMenu;