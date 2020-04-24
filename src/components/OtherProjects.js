import React from 'react';
import improv from '../images/dogface.jpg';
import radio from '../images/nujazz-logo.png'

function OtherProjects() {
    return (
        <section id="otherprojects" className="other-projects">
            <h2>OTHER PROJECTS</h2>

            <h3>Dogface Improv</h3>
            <div class="project-section">

                <div class="col col-xs-12 col-md-4 project-section-first-item">
                    <a href="https://www.dogfaceimprov.com/" target="_blank">
                        <img src={improv} className="other-projects-photo"/>
                    </a>
                </div>

                <div class="col col-xs-12 col-md-4 project-section-second-item">
                    <div class="other-projects-text">
                        <p>
                            I am an active member of the improv collective, Dogface Improv, where I currently perform in numerous troupes, including:
                        </p>
                        <ul>
                            <li>The Dogface Allstars: The public face of Dogface that specialise in WLIIA style short-form games.</li>
                            <li>DIMPLES: The musical improv troupe that focusses on long-form formats.</li>
                            <li>Cyborg Sideboard: A long-form troupe that specialises in the abstract and bizarre.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3>NuJazz Jukebox</h3>
            <div class="project-section">
                <div class="col col-xs-12 col-md-4 project-section-second-item">
                    <a href="https://www.mixcloud.com/NuJazzJukebox/" target="_blank">
                        <img src={radio} className="other-projects-photo"/>
                    </a>
                </div>

                <div class="col col-xs-12 col-md-4 project-section-first-item">
                    <div class="other-projects-text">
                        <p>
                            For three years I was the host and producer of the specialist music show, NuJazz Jukebox on Norwich's community radio station, Future Radio.
                            
                            <br /><br />

                            This was to celebrate modern subgenres of jazz, a style of music I was really passionate about, that at the time wasn't being aired on the station.
                        </p>
                    </div>
                    <iframe width="100%" height="auto" 
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ffutureradio%2Fnjj-future-the-43rd-show%2F" frameborder="0" ></iframe>
                </div>
            </div>

        </section>
    );
}

export default OtherProjects;