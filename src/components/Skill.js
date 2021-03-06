import React from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Skill.scss';

const Skill = (props) => (
        <>
           <div className="skillContainer">
                <div className="card">
                    <div className="card-header">
                        <h2 className ="card-title">{props.title}</h2>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="skill col mr-2">
                            
                                {props.skillItem.map((item, key) =>{
                                    return(
                                    <h4  key ={key} className="skill-item">
                                        <i className={item.fAwesome}></i>{item.name}
                                    </h4>
                                    )
                                })}  
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>

        
);

export default withRouter(Skill);