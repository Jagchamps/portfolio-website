import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
import BurgerMenu from './BurgerMenu.js'
import Intro from './Intro.js';
import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';
import OtherProjects from './OtherProjects.js';
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

function Navbar() {
    return (
        <div className="body">
            <Router>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <NavLink style={styles.link} activeStyle={styles.active} exact to="/portfolio-website">Intro</NavLink>
                        </li>
                        <li>
                            <NavLink style={styles.link} activeStyle={styles.active} exact to="/aboutme">About Me</NavLink>
                        </li>
                        <li>
                            <NavLink style={styles.link} activeStyle={styles.active} to="/otherprojects">Other Projects</NavLink>
                        </li>
                    </ul>
                </nav>

                <BurgerMenu />

                <Switch>
                    <Route path="/otherprojects">
                        <OtherProjects />
                    </Route>
                    <Route path="/aboutme">
                        <AboutMe />
                    </Route>
                    <Route path="/">
                        <Intro />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Navbar;