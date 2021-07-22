import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
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
    const animation = useAnimation();
    // eslint-disable-next-line no-unused-vars
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
            <div className="into-inner">
                <motion.h1 className="intro-text col col-xs-12"
                    variants={headerVariants}
                >
                    Hello. I am <span>Jonathan Champion</span>
                </motion.h1>
                <motion.h1 className="intro-text col col-xs-12"
                    variants={headerVariants}
                >
                    Software Developer
             </motion.h1>
            </div>
        </motion.section>
    );
}

export default Intro;