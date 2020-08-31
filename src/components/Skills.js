import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import SkillItem from './SkillItem';
import { v1 as uuidv1 } from 'uuid';

const Skills = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    let items = ['Java (Spring)', 'RxJava', 'PostgreSQL', 'Docker', 'AWS', 'GIT', 'HTML', 'CSS', 'React', 'SASS (SCSS)', 'Selenium', 'JMeter'];

    return (
        <section id="skills" className="skills section-container">
            <div className="section-inner">
                <h2 className="col col-xs-12"><span style={{ color: theme.highlight.secondary }}>Skills</span> I know</h2>
                <div className="col col-xs-12 skills-section">
                    <p>
                        Here a few skills that I am competent in, and I'm constantly adding more to the list.</p>
                    <ul className="col skills-list">
                        {items.map(item => <SkillItem id={uuidv1} item={item} />)}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;