import React from "react";
import { func, string, bool } from "prop-types";
import { StyledNavbar } from "./Navbar.styled";
import { Burger, Menu } from "../burger";
import ThemeToggle from "../toggle/ThemeToggle";

const Navbar = ({ theme, toggleTheme, open, setOpen }) => {
  return (
    <>
      <StyledNavbar>
        <div className="header-inner">
          <div className="header-left col-xs-10 col-sm-6 col-lg-4 col-xl-3">
            <p className="header-logo">Jonathan Champion</p>
          </div>
          <nav className="navbar col-xs-12 col-sm-8 col-md-5 col-lg-4 col-xl-3">
            <ul>
              <li>
                <a className="link-line" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="link-line" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="link-line" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </li>
            </ul>
          </nav>
          <div className="header-right col-xs-2">
            <Burger open={open} setOpen={setOpen} />
          </div>
        </div>
        <div className="header-mobile">
          <Menu open={open} theme={theme} toggleTheme={toggleTheme} setOpen={setOpen} />
        </div>
      </StyledNavbar>
    </>
  );
};
Navbar.propTypes = {
  open: bool.isRequired,
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  setOpen: func.isRequired,
};
export default Navbar;
