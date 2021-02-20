import React from 'react';
import SectionTitle from '../components/SectionTitle';
import NavBar  from '../components/NavBar';



const ResumePage = (props) => {
    return (
        <main>
              <NavBar/>
            <SectionTitle title={props.title}/>
        </main>

    )
}

export default ResumePage;
