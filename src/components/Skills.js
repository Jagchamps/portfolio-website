import React, { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import SkillItem from './SkillItem';
import { v1 as uuidv1 } from 'uuid';

// const sectionVariants = {
//     hidden: {
//         opacity: 0
//     },
//     visible: {
//         opacity: 1,
//         transition: {
//             delay: 0.5,
//             duration: 1.0,
//             when: "beforeChildren",
//             staggerChildren: 0.4
//         }
//     }
// }

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

const Skills = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const animation = useAnimation();
    const [ref, inView, entry] = useInView({ threshold: 0.1 });

    let items = ['Java (Spring)', 'RxJava', 'PostgreSQL', 'Docker', 'AWS', 'GIT', 'HTML', 'CSS', 'React', 'SASS (SCSS)', 'Selenium', 'JMeter'];

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        } else {
            animation.start("hidden");
        }
    }, [animation, inView]);

    return (
        <motion.section id="skills" className="skills section-container" style={{ color: theme.syntax }}
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={animation}
        >
            <motion.h2 className="col col-xs-8"><span style={{ color: theme.highlight.secondary }}>Skills</span> I know</motion.h2>
            <motion.div className="col col-xs-8 skills-section">
                <motion.p variants={leftContainerVariants}>Here a few skills that I am competent in, and I'm constantly adding more to the list.</motion.p>
                <motion.ul className="col skills-list">
                    {items.map(item => <SkillItem id={uuidv1} item={item} />)}
                </motion.ul>
            </motion.div>
        </motion.section>
    );
}

export default Skills;