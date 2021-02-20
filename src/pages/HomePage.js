import React from 'react';
import '../styles/HomePage.scss';
import DirectoryMenu from '../components/DirectoryMenu';

const HomePage = () => {
    return (
       
        <div className = 'homepage'>
            <div className= 'header'>
                <h1 className= 'header-title'> Hi, I'm Andrea</h1>
                <p className= 'header-subtitle'>I'm a Sofware Developer that believes in building things for enviromental, social and economic good.</p>
            </div>
            <div>
                <DirectoryMenu/>
            </div>    
        </div>
        
       
    )
}

export default HomePage;
