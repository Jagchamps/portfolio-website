import React, { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import improv from '../images/dogface.jpg';
import radio from '../images/nujazz-logo.png'

const sectionVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1.0,
            when: "beforeChildren",
            staggerChildren: 0.4
        }
    }
}

const leftContainerVariants = {
    hidden: {
        x: '-1vw',
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 1.0
        }
    }
}

const rightContainerVariants = {
    hidden: {
        x: '1vw',
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 1.0
        }
    }
}

function OtherProjects() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const animation = useAnimation();
    const [ref, inView, entry] = useInView({ threshold: 0.1 })

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        } else {
            animation.start("hidden");
        }
    }, [animation, inView]);

    return (
        <motion.section id="other-projects" className="other-projects section-container" style={{ color: theme.syntax }}
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={animation}
        >
            <h2 className="col col-xs-8">OTHER PROJECTS</h2>

            <a className="col col-xs-2" href="https://www.dogfaceimprov.com/" target="_blank">Example Link</a>

            <h3 className="col col-xs-8">Dogface Improv</h3>
            <div className="project-section col col-xs-8">
                <motion.div className="col col-xs-8 col-md-4 project-section-first-item"
                    variants={leftContainerVariants}
                >
                    <a href="https://www.dogfaceimprov.com/" target="_blank">
                        <img src={improv} className="other-projects-photo"/>
                    </a>
                </motion.div>

                <motion.div className="col col-xs-8 col-md-4 project-section-second-item"
                    variants={rightContainerVariants}
                >
                    <div className="other-projects-text">
                        <p>
                            I am an active member of the improv collective, Dogface Improv, where I currently perform in numerous troupes, including:
                        </p>
                        <ul>
                            <li>The Dogface Allstars: The public face of Dogface that specialise in WLIIA style short-form games.</li>
                            <li>DIMPLES: The musical improv troupe that focusses on long-form formats.</li>
                            <li>Cyborg Sideboard: A long-form troupe that specialises in the abstract and bizarre.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            <h3 className="col col-xs-8">NuJazz Jukebox</h3>
            <div className="project-section col col-xs-8">
                <motion.div className="col col-xs-8 col-md-4 project-section-second-item"
                    variants={rightContainerVariants}
                >
                    <a href="https://www.mixcloud.com/NuJazzJukebox/" target="_blank">
                        <img src={radio} className="other-projects-photo"/>
                    </a>
                </motion.div>

                <motion.div className="col col-xs-8 col-md-4 project-section-first-item"
                    variants={leftContainerVariants}
                >
                    <div className="other-projects-text">
                        <p>
                            For three years I was the host and producer of the specialist music show, NuJazz Jukebox on Norwich's community radio station, Future Radio.
                            
                            <br /><br />

                            This was to celebrate modern subgenres of jazz, a style of music I was really passionate about, that at the time wasn't being aired on the station.
                        </p>
                    </div>
                    <iframe width="100%" height="auto" 
                src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ffutureradio%2Fnjj-future-the-43rd-show%2F" frameBorder="0" ></iframe>
                </motion.div>
            </div>

        </motion.section>
    );
}

export default OtherProjects;