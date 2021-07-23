import React from 'react';
import { StyledAbout } from './About.styled.js';
import profileXS from '../../assets/profile-286.jpg';
import profileSM from '../../assets/profile-342.jpg';
import profileMD from '../../assets/profile-486.jpg';

const About = () => {

    return (
        <StyledAbout id="about" className="about section-container">
            <div className="section-inner">
            <h2 className="col col-xs-12"><span>About</span> me</h2>
            <div className="col col-xs-12 about-section">
                <div className="col col-xs-12 col-md-6 about-section-second-item">
                    <img src={profileMD} 
                        srcSet={`${profileXS} 286w, 
                            ${profileSM} 342w, 
                            ${profileMD} 486w`} 
                        sizes="(max-width: 479px) 286px, 
                            (max-width: 1599px) 342px, 
                            486px" 
                        className="about-photo show-on-scroll" 
                        alt="Headshot of Jonathan Champion"/>
                </div>
                <div className="col col-xs-12 col-md-6 about-section-first-item">
                    <div>
                        <p className="about-text"><b>UK-based software engineer with experience in full-stack development, front-end automation testing and performance testing.</b></p>
                        <p>I enjoy and creating solutions to technical problems and designing responsive, elegant and intuitive web applications.</p>
                        <p>In my spare time I go climbing, watch art-house films and attend gigs in the fine city of Norwich.</p>
                    </div>
                </div>
            </div>
            </div>
        </StyledAbout>
    );
}

export default About;