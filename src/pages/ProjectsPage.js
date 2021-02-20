import React from 'react';
import ProjectMenu from '../components/ProjectMenu';
import SectionTitle from '../components/SectionTitle';

const ProjectsPage = (props) => {
    return (
           
            <main>
                <SectionTitle title={props.title}/>
                <div className="container">
                    <ProjectMenu/>
                </div>
            </main>
         
            
    )
}


export default ProjectsPage;
