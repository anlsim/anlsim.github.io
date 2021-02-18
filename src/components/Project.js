import React from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Project.scss';

const Project = ({title, description, linkUrl, imgUrl, gitUrl}) => (
        <>
       <div className="row-cols-md-1">
            <div className = 'card'>
                <img class="card-img-top" src={imgUrl}/>
                <div className='card-img' style={{backgroundImage: `url(${imgUrl})`}}/>
                    <h1 className ='card-name'><span className= 'card-name-span'>{title}</span></h1>
                    <p className ='card-description'>{description}</p>

                <div className= 'card-footer'>
                    <div class="card-footer-social">
                        <h3>{gitUrl}</h3>                 
                    </div>
                    <div class="card-footer-social">
                        <h3>{linkUrl}Live Demo</h3>
                        
                    </div>
                </div>
            </div>
        </div>

    

    
        </>

        
);

export default withRouter(Project);