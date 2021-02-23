import React from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Skill.scss';

const Skill = (props) => (
        <>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col mr-2">
                                <div className="skill-header">
                                    <h2 className ="skill">{props.title}</h2>
                                </div>
                                {props.skillItem.map(item=>{
                                    return <h4 className="skill-item">{item.name}</h4>
                                })}  
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>

        
);

export default withRouter(Skill);