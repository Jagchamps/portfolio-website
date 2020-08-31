import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ScrollToTop = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <p style={{ color: theme.highlight.primary }} onClick={scrollToTop} className='link-line'>
            Back to top
        </p>
    );
}

export default ScrollToTop;