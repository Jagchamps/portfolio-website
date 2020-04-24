import React from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Portfolio from './components/Portfolio.js';
import OtherProjects from './components/OtherProjects.js';
import profile from './images/profile.jpg';

class App extends React.Component {
  render() {
    return (
      <div className="profile">
        <div className="header">
          <div className="header-left">
            {/* <img src={profile} className="profile-photo"/> */}
            <h1>Jonathan Champion</h1>
          </div>
          <div className="header-right">
            <nav className='navbar'>
              <ul>
                <li>
                  <a href="#intro">Intro</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#otherprojects">Other Projects</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Intro />
        <About />
        <OtherProjects />
        <Footer />
      </div>
    );
  }
}

export default App;