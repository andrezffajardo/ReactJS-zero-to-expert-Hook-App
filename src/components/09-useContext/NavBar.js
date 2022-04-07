import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    const isActiveStyle = (navData) => navData.isActive ? "nav-link active" : "nav-link"
    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">useContext</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className={isActiveStyle} to="/">Home</NavLink>
                <NavLink className={isActiveStyle} to="/about">About</NavLink>
                <NavLink className={isActiveStyle} to="/login">Login</NavLink>
            </div>
        </div>
    </nav>
    );
};
