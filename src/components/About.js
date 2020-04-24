import React from 'react';
import profile from '../images/profile.jpg';

function About() {
    return (
        <section id="about" className="about">
            <h2>ABOUT</h2>
            <div class="about-section">
                <div className="col col-xs-12 col-md-4 about-section-first-item">
                    <img src={profile} className="about-photo "/>
                </div>
                <div className="col col-xs-12 col-md-4 about-section-second-item">
                    <div className="about-text">
                        <h3>UK based software engineer with experience in full-stack development, front-end automation testing and performance testing</h3>
                        <p>I enjoy and creating solutions to technical problems and designing responsive, elegant and intuitive web applications</p>
                        <p>In my spare time I go climbing, watch arty films and attend gigs in the fine city of Norwich</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;