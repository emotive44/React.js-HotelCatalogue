import React from 'react';
import './Banner.css';

const Banner = ({ children, title, subTitle }) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subTitle}</p>
            {children}
        </div>
    )
}

export default Banner;
