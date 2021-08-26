import React from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/MenuItem.scss';

const MenuItem = ({title, history, linkUrl, match}) => (
        <>
        <div className ="pentagon" onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className ="pentagon__content">
                    <h1 className ="pentagon__title">{title.toUpperCase()}</h1>
            </div>
        </div>
        </>
    
);

export default withRouter(MenuItem);