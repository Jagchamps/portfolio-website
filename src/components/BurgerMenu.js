import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';
import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';
import OtherProjects from './OtherProjects.js';
import Home from './Home.js';
import '../styles/App.scss';

var styles = {
    link: {
        textDecorationLine: 'none',
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center'
    },

    active: {
        color: '#0f70e8'
    }
};

function BurgerMenu() {
    return (
        <Menu right width={ "100%" } className="bm-menu-container">
            <NavLink style={styles.link} activeStyle={styles.active} exact to="/">Home</NavLink>
            <NavLink style={styles.link} activeStyle={styles.active} to="/aboutme">About me</NavLink>
            <NavLink style={styles.link} activeStyle={styles.active} to="/portfolio">Portfolio</NavLink>
            <NavLink style={styles.link} activeStyle={styles.active} to="/otherprojects">Other Projects</NavLink>
        </Menu>
    );
}

export default BurgerMenu;