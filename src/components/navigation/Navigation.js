import React from "react";
import { func, string, bool } from "prop-types";
import ThemeToggle from "../toggle/ThemeToggle";
import { v1 as uuidv1 } from "uuid";

const Navigation = ({ theme, toggleTheme, open, setOpen  }) => {
  function handleClick(e) {
    setOpen(!open);
  }

  return (
    <ul>
      <li>
        <a className="link-line" href="#about" onClick={open ? handleClick : undefined }>
          About
        </a>
      </li>
      <li>
        <a className="link-line" href="#skills" onClick={open ? handleClick : undefined }>
          Skills
        </a>
      </li>
      <li>
        <a className="link-line" href="#contact" onClick={open ? handleClick : undefined }>
          Contact
        </a>
      </li>
      <li>
        <ThemeToggle key={uuidv1()} theme={theme} toggleTheme={toggleTheme} />
      </li>
    </ul>
  );
};
Navigation.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  open: bool,
  setOpen: func,
};
export default Navigation;
