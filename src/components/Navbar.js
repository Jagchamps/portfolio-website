import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const linkVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.25
        }
    }
}

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <header>
            <div
                className="header-inner"
                style={{ backgroundColor: theme.ui }}>
                <nav className="navbar col-xs-10 col-lg-8 col-xl-4">
                    <ul>
                        <motion.li
                            variants={linkVariants}
                            whileHover="hover">
                            <a
                                href="#intro"
                                style={{ color: theme.highlight.primary }}>
                                Intro
                                </a>
                        </motion.li>
                        <motion.li
                            variants={linkVariants}
                            whileHover="hover">
                            <a
                                href="#about"
                                style={{ color: theme.highlight.primary }}>
                                About
                                </a>
                        </motion.li>
                        <motion.li
                            variants={linkVariants}
                            whileHover="hover">
                            <a
                                href="#skills"
                                style={{ color: theme.highlight.primary }}>
                                Skills
                                </a>
                        </motion.li>
                        <motion.li
                            variants={linkVariants}
                            whileHover="hover">
                            <a
                                href="#contact"
                                style={{ color: theme.highlight.primary }}>
                                Contact
                                </a>
                        </motion.li>
                        <motion.li
                            variants={linkVariants}
                            whileHover="hover">
                            <ThemeToggle />
                        </motion.li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;