import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

// const linkVariants = {
//     initial: {
//         backgroundImage: 'linear-gradient(#222b40, #222b40)',
//         backgroundSize: '0 4px',
//         backgroundPosition: '0 100%',
//         backgroundRepeat: 'no-repeat',
//     },
//     hover: {
//         backgroundSize: '100% 4px',
//         backgroundPosition: '100% 100%',
//         transition: {
//             backgroundSize: '2s linear',
//             backgroundPosition: '2s linear',
//         }
//     }
// }

const linkVariants = {
    initial: {
        x: '-100.5%',
        height: '2px',
        backgroundColor: 'black',
    },
    hover: {
        x: '0%',
        transition: {
            duration: 2
        }
    },
    exit: {

    }
}

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
        <p style={{ color: theme.highlight.primary}} onClick={scrollToTop} className='link-line'>
                Back to top
            </p>
    );
}

export default ScrollToTop;