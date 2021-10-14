import React from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/_custom-card.scss';

const Skill = (props) => (
           <div className="custom-card">
                    <div className="custom-card__header">
                        <h1 className ="custom-card__title">{props.title}</h1>
                    </div>
                    <div className="custom-card__body">
                                {props.skillItem.map((item, key) =>{
                                    return(
                                    <div key ={key} className="custom-card__tools">
                                        <i className={item.fAwesome}></i>{item.name}
                                    </div>
                                    )
                                })}  
                    </div>
            </div>    
);

export default withRouter(Skill);