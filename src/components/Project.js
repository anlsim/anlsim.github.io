import React from 'react';
import '../styles/MenuItem.scss';

const Project = ({title, description}) => (

        <div className = 'project-item'>
            <div className = 'content'>
                    <h1 className ='title'>{title.toUpperCase()}</h1>
                    <span className ='description'>{description}</span>
            </div>
        
        </div>
    
);

export default Project;