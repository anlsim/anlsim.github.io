import React from 'react';
import SectionTitle from '../components/SectionTitle';
import NavBar  from '../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHtml5, faJava, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';



const SkillsPage = (props) => {
    return (
        <main>
            <NavBar/>
            <SectionTitle title={props.title}/>
            <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Programming Languages</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">Java</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">C#</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">JavaScript</div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                               Frameworks</div>
                                
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Other</div>
                               
                            </div>
                           
                        </div>
                    </div>
                </div>
           </div>
        </div>
            
            
                        
        </main>

    )
}

export default SkillsPage;
