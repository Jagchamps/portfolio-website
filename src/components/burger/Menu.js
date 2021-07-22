// Menu.js
import React from "react";
import { func, string, bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import ThemeToggle from '../toggle/ThemeToggle';

const Menu = ({ open, theme, toggleTheme, setOpen }) => {

  function handleClick(e) {
    setOpen(!open);
  }

  return (
    <StyledMenu className="col" open={open}>
      <div className="menu-inner">
      <ul>
        <li>
          <a className="link-line" href="#about" onClick={handleClick}>
            About
          </a>
        </li>
        <li>
          <a className="link-line" href="#skills" onClick={handleClick}>
            Skills
          </a>
        </li>
        <li>
          <a className="link-line" href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>
        <li>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </li>
      </ul>
      </div>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  setOpen: func.isRequired,
};
export default Menu;
