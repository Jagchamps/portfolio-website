import React from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import profile from './images/profile.jpg';

class App extends React.Component {
  render() {
    return (
    <div className="Profile">
      <div className="header">
        <div className="header-left">
          <img src={profile} className="profile-photo"/>
          <h1>Jonathan<br/>Champion</h1>
        </div>
        <div className="header-right">
          <h3>jonathan.ag.champion@gmail.com</h3>
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
    );
  }
}

export default App;