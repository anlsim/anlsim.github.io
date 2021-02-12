import React from 'react';
import '../styles/HomePage.scss';
import DirectoryMenu from '../components/DirectoryMenu';

const HomePage = () => {
    return (
        <div className = 'homepage'>
            <div className= 'intro'>
                <h1 className= 'intro-text'> Hi, I am Andrea</h1>
            </div>
            <DirectoryMenu/>
            
        </div>
    )
}

export default HomePage;
