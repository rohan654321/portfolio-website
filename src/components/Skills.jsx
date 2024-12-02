import { motion } from 'framer-motion';
import React from 'react';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa';
import './Skills.css'; // Import the CSS file for the component

// Skill data with icons and levels
const skills = [
  { name: 'React', icon: <FaReact />, level: 90 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
  { name: 'JavaScript', icon: <FaJsSquare />, level: 85 },
  { name: 'HTML', icon: <FaHtml5 />, level: 95 },
  { name: 'CSS', icon: <FaCss3Alt />, level: 75 },
];

const Skills = () => {
  return (
    <motion.div
      className="skills-container"
      initial={{ opacity: 5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
      id='skills-container'
    >
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-header">
              <div className="skill-icon">{skill.icon}</div>
              <h2 className="skill-name">{skill.name}</h2>
              <span className="skill-percentage">
                {`${skill.level}%`}
              </span>
            </div>
            <div className="skill-bar-container">
              <motion.div
                className="skill-bar"
                initial={{ width: '0%' }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 2, ease: 'easeOut' }}
                style={{
                  backgroundColor: '#4caf50',
                }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
