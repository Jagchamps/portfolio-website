import React from "react";
import { StyledSkills } from "./Skills.styled";

const Skills = () => {
  let items = [
    "HTML5",
    "CSS3",
    "SASS",
    "Javascript",
    "React",
    "Vue",
    "Java (Spring)",
    "RxJava",
    "PostgreSQL",
    "Docker",
    "AWS",
    "GIT",
    "Selenium",
    "JMeter",
  ];

  return (
    <StyledSkills id="skills" className="section-container">
      <div className="section-inner">
        <h2 className="col col-xs-12">
          <span>Skills</span> I have
        </h2>
        <div className="col col-xs-12 skills-section">
          <p>
            I have experience working in Agile development, and using Jenkins for continuous delivery. Additionally, here are a few languages that I am competent in, and I'm constantly adding more to the list.
          </p>
          <ul className="col skills-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          
        </div>
      </div>
    </StyledSkills>
  );
};

export default Skills;
