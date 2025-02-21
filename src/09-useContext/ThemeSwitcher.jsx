import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Toogle theme
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={toggleTheme}>Change theme</a></li>
                <li><a  className="dropdown-item" href="#">Current Theme: {theme}</a></li>
            </ul>
        </li>
    );
};

export default ThemeSwitcher;
