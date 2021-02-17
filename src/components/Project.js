import React from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Project.scss';

const Project = ({title, description, history, linkUrl, imgUrl, gitUrl}) => (
        <>
       <div className="row-cols-md-1">

       
        <article className = 'card'>
            <div className='card-img' style={{backgroundImage: `url(${imgUrl})`}}/>

          

            
            
                <h1 className ='card-name'><span className= 'card-name-span'>{title}</span></h1>
                <p className ='card-description'>{description}</p>
           
            

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
        </div>

    

    
        </>

        
);

export default withRouter(Project);