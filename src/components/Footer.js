import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import ScrollToTop from './ScrollToTop';

const linkVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.25
        }
    }
}

const Footer = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <footer id="contact" className="section-container">
            <h2 className="col-xs-12">
                <span style={{ color: theme.highlight.secondary }}>Contact</span> me
                </h2>
            <div className='col-xs-12 contact section-container'>
                <ul>
                    <motion.li
                        className="col col-xs-3"
                        variants={linkVariants}
                        whileHover="hover">
                        <a
                            style={{ color: theme.highlight.primary }}
                            href="mailto:jonathan.ag.champion@gmail.com">
                            Mail
                        </a>
                    </motion.li>
                    <motion.li
                        className="col col-xs-3"
                        variants={linkVariants}
                        whileHover="hover">
                        <a
                            style={{ color: theme.highlight.primary }}
                            href="https://www.linkedin.com/in/jonathan-champion-39281993">
                            LinkedIn
                        </a>
                    </motion.li>
                </ul>
            </div>
            <ScrollToTop />
        </footer>
    )
}

export default Footer;