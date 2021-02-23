import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import '../styles/Project.scss';


const Project = ({title, description, linkUrl, imgUrl, gitUrl}) => (
        <>
            <div className="row-md-1">
                <div className = 'card'>
                    
                    <div className='card-img' style={ {backgroundImage: `url('${imgUrl}')`} }></div>
                            <h1 className ='card-name'>{title}</h1>
                            <p className ='card-description'>{description}</p>
                    <div className= 'card-footer'>
                        
                            <h3>
                                <a className="card-footer-icon"  href={gitUrl} target="blank">
                                <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </h3>                 
                       
                        
                    </div>
                </div>
            </div>
        </>

        
);

export default withRouter(Project);