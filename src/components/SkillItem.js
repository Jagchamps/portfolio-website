import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const SkillItem = ({ id, item }) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <li key={id} style={{ backgroundColor: theme.highlight.primary, color: '#f2f2f2' }}>
            {item}
        </li>
    );
}

export default SkillItem;