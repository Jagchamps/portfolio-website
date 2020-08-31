import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import profile from '../images/profile.jpg';

const About = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <section id="about" className="about section-container">
            <div className="section-inner">
            <h2 className="col col-xs-12"><span style={{ color: theme.highlight.secondary }}>About</span> me</h2>
            <div className="col col-xs-12 about-section">
                <div className="col col-xs-12 col-md-6 about-section-second-item">
                    <img src={profile} className="about-photo show-on-scroll" 
                        style={{ border: 'solid 2px', borderColor: theme.syntax }} />
                </div>
                <div className="col col-xs-12 col-md-6 about-section-first-item">
                    <div className="about-text">
                        <h3>UK based software engineer with experience in full-stack development, front-end automation testing and performance testing</h3>
                        <p>I enjoy and creating solutions to technical problems and designing responsive, elegant and intuitive web applications</p>
                        <p>In my spare time I go climbing, watch artsy films and attend gigs in the fine city of Norwich</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default About;