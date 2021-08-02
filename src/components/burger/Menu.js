// Menu.js
import React from "react";
import { func, string, bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Navigation } from "../navigation";

const Menu = ({ theme, toggleTheme, open, setOpen }) => {
  return (
    <StyledMenu className="col" open={open}>
      <div className="menu-inner">
      <Navigation open={open} theme={theme} toggleTheme={toggleTheme} setOpen={setOpen} />
      </div>
    </StyledMenu>
  );
};
Menu.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Menu;
