import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const sectionVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            when: "beforeChildren",
            delayChildren: 0.4,
            staggerChildren: 0.07
        }
    }
}

const Contact = () => {
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
        <motion.section id="contact" className="section-container contact"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={animation}
        >
            <div className="section-inner">
                <h2 className="col-xs-12">
                    <span style={{ color: theme.highlight.secondary }}>Contact</span> me
                </h2>
                <div className='col-xs-8 col-sm-12 section-container contact-list-container'>
                    <ul>
                        <li
                            className="col col-xs-6 col-sm-3">
                            <a
                                className="link-line"
                                style={{ color: theme.highlight.primary }}
                                href="mailto:jonathan.ag.champion@gmail.com">
                                Mail
                            </a>
                        </li>
                        <li
                            className="col col-xs-6 col-sm-3">
                            <a
                                className="link-line"
                                style={{ color: theme.highlight.primary }}
                                href="https://www.linkedin.com/in/jonathan-champion-39281993"
                                rel="noreferrer"
                                target="_blank">
                                LinkedIn
                            </a>
                        </li>
                        <li
                            className="col col-xs-6 col-sm-3">
                            <a
                                className="link-line"
                                style={{ color: theme.highlight.primary }}
                                href="https://twitter.com/JagChamps"
                                rel="noreferrer"
                                target="_blank">
                                Twitter
                            </a>
                        </li>
                        <li
                            className="col col-xs-6 col-sm-3">
                            <a
                                className="link-line"
                                style={{ color: theme.highlight.primary }}
                                href="https://github.com/Jagchamps"
                                rel="noreferrer"
                                target="_blank">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;