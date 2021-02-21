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
                id: 1,
                linkUrl: 'about'
            },
            {
                title: 'Resume',
                id: 2,
                linkUrl: 'resume'
            },
            {
                title: 'Projects',
                id: 3,
                linkUrl: 'projects'
            },
            {
                title: 'Contact',
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