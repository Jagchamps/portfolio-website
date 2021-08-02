import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { lightTheme, darkTheme } from "./theme";
import Intro from "./components/intro/Intro.js";
import About from "./components/about/About.js";
//import Portfolio from './components/Portfolio.js';
import Skills from "./components/skills/Skills";
import Navbar from "./components/header/Header";
import Contact from "./components/contact/Contact";
import { useDarkMode } from "./hooks";

function App() {
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles open={open}/>
        <div className="profile">
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            open={open}
            setOpen={setOpen}
          />
          <Intro />
          <About />
          <Skills />
          <Contact />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
