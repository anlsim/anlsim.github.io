import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import '../styles/Project.scss';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';



const Project = ({title, description, linkUrl, imgUrl, gitUrl, tools}) => (
   
            <div className="project">
                    <div className='project__title'>
                        <h1 className ='project__name'>{title}</h1>
                    </div>
                    <div className='project__body'>
                        <p className ='project__description'>{description}</p>
                        <hr/>
                        <h2 className='project__section-title'>Tools used</h2>
                        <div className="project__tools">
                            {tools.map((t, index) => {
                                return(
                                    <>
                                    <p className="project__tools__desc">{t.name} </p>
                                    <i className={t.fAwasome}/>
                                    </>
                                )
                            })}
                        </div>
                    </div>  
                    <div className= 'project__footer'>
                            <a className="project__footer__icon"  href={gitUrl} target="blank">
                            <FontAwesomeIcon icon={faGithub}/>
                            </a>
                            {
                            linkUrl && 
                            <a className="project__footer__icon"  href={linkUrl} target="blank">
                            <FontAwesomeIcon icon={faDesktop}/>
                            </a>
                            }               
                    </div>
                
            
            </div>
      

        
);

export default withRouter(Project);