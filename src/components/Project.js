import React from 'react';
import '../styles/MenuItem.scss';

const Project = ({title}) => (

        <div className = 'project-item'>
            <div className = 'content'>
                    <h1 className ='title'>{title}</h1>
                    <span className='description'>All</span>
            </div>
        
        </div>
    
);

export default Project;