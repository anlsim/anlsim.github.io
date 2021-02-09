import React, {Component} from 'react';
import '../styles/DirectoryMenu.scss';
import MenuItem from '../components/MenuItem';

class DirectoryMenu extends Component {
    constructor(){
        super();
        this.state ={
            sections:  [{
                title: 'Resume',
                imageUrl: 'commingsoon',
                id: 1
            },
            {
                title: 'Projects',
                imageUrl: 'commingsoon',
                id: 2
            },
            {
                title: 'Contact',
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

export default DirectoryMenu;