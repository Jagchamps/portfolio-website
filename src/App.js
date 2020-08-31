import React, { useContext } from 'react';
import './styles/App.scss';
import Footer from './components/Footer.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import OtherProjects from './components/OtherProjects.js';
import profile from './images/profile.jpg';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import { ThemeContext } from './contexts/ThemeContext';
import Contact from './components/Contact';

const App = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className="profile" style={{ backgroundColor: theme.bg, color: theme.syntax }}>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;