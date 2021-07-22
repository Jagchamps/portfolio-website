import React from 'react';
import { StyledThemeToggle } from './ThemeToggle.styled';
import { v1 as uuidv1 } from "uuid";

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <StyledThemeToggle key={uuidv1}>
        <label className="themeSwitch">
            <input type="checkbox" onClick={toggleTheme} checked={theme === "dark"}/>
                <span className="slider round"></span>
        </label>
        </StyledThemeToggle>
     );
}
 
export default ThemeToggle;