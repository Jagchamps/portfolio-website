import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';

const skillVariants = {
    hidden: {
        x: '1vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.25,
            x: { stiffness: 1000, velocity: -100 }
        }
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.25
        }
    }
}

const SkillItem = ({ id, item }) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <motion.li
            key={id}
            style={{ backgroundColor: theme.highlight.primary, color: '#f2f2f2' }}
            variants={skillVariants}
            initial="hidden"
            animation="visible"
            whileHover="hover">
            {item}
        </motion.li>
    );
}

export default SkillItem;