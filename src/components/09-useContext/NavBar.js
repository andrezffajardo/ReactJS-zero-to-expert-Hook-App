import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    const isActiveStyle = (navData) => navData.isActive ? "nav-link active" : "nav-link"
    return (
        <ul className="nav nav-tabs nav-fill navbar navbar-light justify-content-center">
            <li className='nav-item'><NavLink className={isActiveStyle} to="/">Home</NavLink></li>
            <li className='nav-item'><NavLink className={isActiveStyle} to="/about">About</NavLink></li>
            <li className='nav-item'><NavLink className={isActiveStyle} to="/login">Login</NavLink></li>
        </ul>
    );
};
