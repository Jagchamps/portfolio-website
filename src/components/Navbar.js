import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <header>
            <div
                className="header-inner"
                style={{ backgroundColor: theme.ui }}>
                <nav className="navbar col-xs-12 col-sm-8 col-md-5 col-lg-4 col-xl-3 col-full-3">
                    <ul>
                        <li>
                            <a
                                className='link-line'
                                href="#about"
                                style={{ color: theme.highlight.primary }}>
                                About
                                </a>
                        </li>
                        <li>
                            <a
                                className='link-line'
                                href="#skills"
                                style={{ color: theme.highlight.primary }}>
                                Skills
                                </a>
                        </li>
                        <li>
                            <a
                                className='link-line'
                                href="#contact"
                                style={{ color: theme.highlight.primary }}>
                                Contact
                                </a>
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;