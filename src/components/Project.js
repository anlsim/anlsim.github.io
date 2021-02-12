import React from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Project.scss';

const Project = ({title, description, history, linkUrl, match}) => (

        <div className = 'project-item' onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className = 'content'>
                <h1 className ='title'>{title}</h1>
                <span className ='description'>{description}</span>
            </div>
        
        </div>
    
);

export default withRouter(Project);