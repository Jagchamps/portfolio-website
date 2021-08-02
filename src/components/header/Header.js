import React from "react";
import { func, string, bool } from "prop-types";
import { StyledHeader } from "./Header.styled";
import { Burger, Menu } from "../burger";
import { Navigation } from "../navigation";
const Header = ({ theme, toggleTheme, open, setOpen }) => {
  return (
    <>
      <StyledHeader>
        <div className="header-inner" data-testid="header-inner">
          <div className="header-left col-xs-10 col-sm-6 col-lg-4 col-xl-3">
            <p className="header-logo">Jonathan Champion</p>
          </div>
          <nav className="navbar col-md-5 col-lg-4 col-xl-3">
            <Navigation theme={theme} toggleTheme={toggleTheme} />
          </nav>
          <div className="header-right col-xs-2">
            <Burger open={open} setOpen={setOpen} />
          </div>
        </div>
        <div className="header-mobile">
          <Menu theme={theme} toggleTheme={toggleTheme} open={open} setOpen={setOpen} />
        </div>
      </StyledHeader>
    </>
  );
};
Header.propTypes = {
  open: bool.isRequired,
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  setOpen: func.isRequired,
};
export default Header;
