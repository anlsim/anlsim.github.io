import React from 'react';
import '../styles/SectionTitle.scss';

const SectionTitle = (props) => {
    return (
       
        <div className= 'hero'>
            <div className='hero__background'>
                <h1 className='hero__text'>{props.title}</h1>
            </div>
            
        </div>
    )
}
export default SectionTitle;