import React from 'react';
import NavBar from '../components/NavBar';
import ProjectMenu from '../components/ProjectMenu';
import SectionTitle from '../components/SectionTitle';


const ProjectsPage = (props) => {
    return (
      
           <main>
                 <NavBar/>
                <SectionTitle title={props.title}/>
                <div className="container">
                    <ProjectMenu/>
                </div>
            </main>
         
    )
}


export default ProjectsPage;
