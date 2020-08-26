import React, { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import profile from '../images/profile.jpg';

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

const About = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const animation = useAnimation();
    const [ref, inView, entry] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        } else {
            animation.start("hidden");
        }
    }, [animation, inView]);

    return (
        <motion.section id="about" className="about section-container"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={animation}
        >
            <h2 className="col col-xs-12"><span style={{ color: theme.highlight.secondary }}>About</span> me</h2>
            <div className="col col-xs-12 about-section">
                <motion.div className="col col-xs-12 col-md-3 about-section-second-item"
                    variants={rightContainerVariants}
                >
                    <motion.img src={profile} className="about-photo show-on-scroll" 
                        style={{ border: 'solid 2px', borderColor: theme.syntax }} 
                        initial={{ filter: 'grayscale(100%)' }}
                        whileHover={{ filter: 'grayscale(0%)' }}
                        transition={{ duration: 0.5 }} />
                </motion.div>
                <motion.div className="col col-xs-12 col-md-3 about-section-first-item"
                    variants={leftContainerVariants}
                >
                    <div className="about-text">
                        <h3>UK based software engineer with experience in full-stack development, front-end automation testing and performance testing</h3>
                        <p>I enjoy and creating solutions to technical problems and designing responsive, elegant and intuitive web applications</p>
                        <p>In my spare time I go climbing, watch artsy films and attend gigs in the fine city of Norwich</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default About;