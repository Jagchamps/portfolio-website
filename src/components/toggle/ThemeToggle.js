import React from 'react';
import { StyledThemeToggle } from './ThemeToggle.styled';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <StyledThemeToggle>
            <input type="checkbox" 
                name="themeToggle"
                id="themeToggle"
                checked={theme === "dark"}
                onChange={toggleTheme}/>
            <label className="themeSwitch"
                for="themeToggle"
                data-testid="toggle-theme-input"/>
        </StyledThemeToggle>
     );
}
 
export default ThemeToggle;