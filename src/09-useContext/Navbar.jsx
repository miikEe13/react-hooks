import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeContext } from './context/ThemeContext';

export const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <nav className={`navbar navbar-expand-lg rounded-3 ${theme === 'dark' ? 'navbar-dark bg-dark' : ''}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/">
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/about">
                            About
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/Login">
                            Login
                        </NavLink>
                        <ThemeSwitcher />
                    </ul>
                </div>
            </div>
        </nav>
    )
}
