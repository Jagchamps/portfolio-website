import React from 'react';
import improv from '../images/dogface.jpg';
import radio from '../images/nujazz-logo.png'

function OtherProjects() {
    return (
        <div className="other-projects">
            <h1>Other Projects</h1>

            <h2>Dogface Improv</h2>
            <div class="section">

                <div class="col section-first-item">
                    <img src={improv} className="other-projects-photo"/>
                </div>

                <div class="col section-second-item">
                    <p>
                        I am an active member of the improv collective, Dogface Improv, where I currently perform in numerous troupes including the Dogface Allstars
                    </p>
                </div>
            </div>

            <h2>NuJazz Jukebox</h2>
            <div class="section">
                <div class="col section-second-item">
                    <img src={radio} className="other-projects-photo"/>
                </div>

                <div class="col section-first-item">
                    <p>
                        I used to host and produce the specialist music show, NuJazz Jukebox on Norwich's community radio station, Future Radio.
                    </p>
                    <iframe width="100%" height="auto" 
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ffutureradio%2Fnjj-future-the-43rd-show%2F" frameborder="0" ></iframe>
                </div>
            </div>

        </div>
    );
}

export default OtherProjects;