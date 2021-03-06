import React from 'react';
import './Header.css';
import image from './tiger.png'

const Header = () => {
    return (
        <div className="header">
            <img src={image} alt=""/>
            <h1>Tigers King</h1>
        </div>
    );
};

export default Header;