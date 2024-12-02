import React from 'react';
import { FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import './projects.css';

const projects = [
  {
    title: 'E-Cart Website',
    description: 'An e-commerce platform built with React.',
    icon: <FaReact className="card-icon" />,
  },
  {
    title: 'Expense Tracker',
    description: 'A web app to track expenses, created with React.',
    icon: <FaNodeJs className="card-icon" />,
  },
  {
    title: 'To-Do List',
    description: 'A simple and intuitive to-do list application.',
    icon: <FaCss3Alt className="card-icon" />,
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my work.',
    icon: <FaReact className="card-icon" />,
  },
  {
    title: 'Weather App',
    description: 'A weather forecast app using Node.js and APIs.',
    icon: <FaNodeJs className="card-icon" />,
  },
  {
    title: 'Responsive Website',
    description: 'A modern, fully responsive website using CSS3.',
    icon: <FaCss3Alt className="card-icon" />,
  },
];

const Projects = () => {
  return (
    <div
      className="min-h-screen py-20"
      id="container"
    >
      <h2>My Projects</h2>
      <div className="containerCard">
        <div className="grid">
          {projects.map((project, index) => (
            <div key={index}
              className="card"
            >
              {project.icon}
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
