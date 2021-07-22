import React from 'react';
import ProjectItem from './ProjectItem';
import { v1 as uuidv1 } from 'uuid';

const Projects = () => {
    let items = ['Java (Spring)', 'RxJava', 'PostgreSQL', 'Docker', 'AWS', 'GIT', 'HTML', 'CSS', 'React', 'SASS (SCSS)', 'Selenium', 'JMeter'];

    return (
        <section id="projects" className="section-container">
            <div className="section-inner">
                <h2 className="col col-xs-12"><span style={{ color: theme.highlight.secondary }}>Projects</span> I've done</h2>
                <div className="col col-xs-12 projects-section">
                    <div className="col projects-list">
                        {items.map(item => <ProjectItem id={uuidv1} item={item} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;