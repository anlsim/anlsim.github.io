import React from 'react'
import { Container } from 'react-bootstrap';
import '../styles/aboutme.scss';
import '../styles/Project.scss';

const AboutMePage = () => {
    return (
        <main>
          <div className="row">
            <div className="col-3">
            <div className = 'card'>
            <div className='card-side card-side-front'>
                FRONT
            </div>
            <div className='card-side card-side-back'>
                BACK
            </div>
            </div>
            <div className = 'card'>
            <div className='card-side card-side-front'>
                FRONT
            </div>
            <div className='card-side card-side-back'>
                BACK
            </div>
            </div>

            </div>
         
        </div>
        
        </main>
        
    )
}

export default AboutMePage;