import React from 'react';
import '../styles/HomePage.scss';
import DirectoryMenu from '../components/DirectoryMenu';

const HomePage = () => {
    return (
        <div className = 'backgroundImage'>
                 <div className = 'homepage'>
            <div className= 'intro'>
                <h1 className= 'intro-text'> Hi, I'm Andrea</h1>
                <p>I'm a Sofware Developer that believes in building things for enviromental, social and economic good.</p>
            </div>
       
            
            <DirectoryMenu/>
            
            
        </div>
        </div>
        
       
    )
}

export default HomePage;
