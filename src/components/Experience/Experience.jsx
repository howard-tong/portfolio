import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => (
  <div id="experience" className="container">
    <ExperienceCard
      jobTitle = "Front-End Software Engineer"
      industry = "SaaS, E-Commerce, E-Logistics"
      iconName = "truck"
      iconColor = "blue"
      jobDescription = {
        [
          'Develop and deploy a delivery driver mobile app from the ground up that facilitates hundreds of thousands of dollars in sales per month across multiple clients',
          'Design and implement rolling features on supply chain management and e-commerce platforms that drastically increased the efficiency of our clients’ business',
          'Perform peer code reviews and hold retrospectives to improve the quality of work and improve the robustness of our products',
          'Manage tasks and plan sprints for the development cycle to maintain an effective workflow',
        ]
      }
      technologies = {
        ['React', 'React-Native', 'Redux', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'GIT']
      }
    />
  </div>
);

export default Experience;

