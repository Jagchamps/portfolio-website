import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <footer style={{ backgroundColor: theme.ui }}>
            <div className="footer-inner">
                <div className="col col-xs-12 section-container">
                    <ScrollToTop />
                </div>
            </div>
        </footer>
    )
}

export default Footer;