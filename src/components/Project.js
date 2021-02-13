import React from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Project.scss';

const Project = ({title, description, history, linkUrl, imgUrl, gitUrl}) => (
        <>
        <main className='flex'></main>
        <article className = 'card'>
        <img src={imgUrl} alt="project image" class="card-header" />
            <div className = 'card-body'>
                <h1 className ='card-body-name'>{title}</h1>
                <p className ='card-body-description'>{description}</p>
            </div>
            

            <div className= 'card-footer'>
                <div class="card-footer-social">
                    <h3>{gitUrl}</h3>
                    <p>GitHub</p>
                </div>
                <div class="card-footer-social">
                    <h3>{linkUrl}Live Demo</h3>
                    <p>Live Demo</p>
                </div>


            </div>
        
        </article>

    
        </>

        
);

export default withRouter(Project);