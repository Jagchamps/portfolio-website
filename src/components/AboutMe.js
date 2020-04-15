import React from 'react';
import profile from '../images/profile.jpg';

function AboutMe() {
    return (
        <section id="aboutme" className="aboutme">
            <h2>ABOUT ME</h2>
            <img src={profile} className="aboutme-photo"/>
            <div className="aboutme-section">
                <h3>UK based software engineer with experience in full-stack development, front-end automation testing and performance testing</h3>
                <p>I enjoy and creating solutions to technical problems and designing responsive, elegant and intuitive web applications</p>
                <p>In my spare time I go climbing, watch arty films and attend gigs in the fine city of Norwich</p>
            </div>
        </section>
    );
}

export default AboutMe;