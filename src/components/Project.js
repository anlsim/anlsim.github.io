import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import '../styles/Project.scss';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';



const Project = ({title, description, linkUrl, imgUrl, gitUrl, tools}) => (
   
        <>
            <div className="project">
                <div className = 'card'>
                    <div className='card-title'>
                        <h1 className ='card-name'>{title}</h1>
                    </div>
                    <div className='card-body'>
                        <p className ='card-description'>{description}</p>
                        <hr/>
                        <h2 className='card-tools'>Tools used:</h2>
                        <div className="card-toolsDiv">

                        
                        {tools.map((t, index) => {
                            return(
                                <>
                                 <p className="card-toolsDiv-description">{t.name} </p>
                                <i className={t.fAwasome}/>
                                
                                </>
                        // </p>
                            )
                        })}
                        </div>
                    </div>  
                    <div className= 'card-footer'>
                        <h3 className='card-footer-content'>
                            <a className="card-footer-icon"  href={gitUrl} target="blank">
                            <FontAwesomeIcon icon={faGithub}/>
                            </a>
                            {
                            linkUrl && 
                            <a className="card-footer-icon"  href={linkUrl} target="blank">
                            <FontAwesomeIcon icon={faDesktop}/>
                            </a>
                            }
                         
                        </h3>                           
                    </div>
                
                </div>
            </div>
        </>

        
);

export default withRouter(Project);