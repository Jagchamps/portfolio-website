import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <label className="themeSwitch">
            <input type="checkbox" onClick={toggleTheme} />
                <span class="slider round"></span>
        </label>
     );
}
 
export default ThemeToggle;