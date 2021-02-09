import React from 'react';
import '../styles/MenuItem.scss';

const MenuItem = ({title}) => (

        <div className = 'menu-item'>
            <div className = 'content'>
                    <h1 className ='title'>{title}</h1>
                    <span className='subtitle'>All</span>
            </div>
        
        </div>
    
);

export default MenuItem;