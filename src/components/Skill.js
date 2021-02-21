import React from 'react';
import {withRouter} from 'react-router-dom';

const Skill = (props) => (
        <>
            <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">{props.title}</div>
                                   {props.skillItem.map(item=>{
                                        return <div className="h5 mb-0 font-weight-bold text-gray-800">{item.name}</div>
                                    })}
                                    {/* {this.state.skillItem.map(item=>{
                                        return <div className="h5 mb-0 font-weight-bold text-gray-800">{item.name}</div>
                                    })} */}
                                   
                                    {/* <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">C#</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">JavaScript</div> */}
                                </div>
                            
                            </div>
                        </div>
                    </div>
            </div>
        </>

        
);

export default withRouter(Skill);