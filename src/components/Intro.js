import React, { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1.5,
            when: "beforeChildren",
            staggerChildren: 1.0
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}

const headerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }
}

const Intro = () => {
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
        <motion.section id="intro" className="intro section-container"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={animation}
        >
            <motion.h1 className="intro-text col col-xs-12" style={{ color: theme.syntax }}
                variants={headerVariants}
            >
                Hello. I am <span style={{ color: theme.highlight.secondary }}>Jonathan Champion</span>
             </motion.h1>
            <motion.h1 className="intro-text col col-xs-12" style={{ color: theme.syntax }}
                variants={headerVariants}
            >
                Software Developer
             </motion.h1>
        </motion.section>
    );
}

export default Intro;