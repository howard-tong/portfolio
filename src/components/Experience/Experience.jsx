import React, { useState } from 'react';
import { faDna, faTruck, faLightbulb } from '@fortawesome/free-solid-svg-icons';

import TabList from './TabList';
import ExperienceCard from './ExperienceCard';

const experienceEntries = [
  {
    key: 'stanford',
    company: "Stanford University (ClinGen)",
    title: "Front-End Software Engineer",
    subtitle: "Gene Classification, Variant Interpretation",
    date: "May 2019 - Current",
    icon: faDna,
    iconColor: "red",
    description: [
      'Develop and deploy a delivery driver mobile app from the ground up that facilitates hundreds of thousands of dollars in sales per month across multiple clients',
      'Design and implement rolling features on supply chain management and e-commerce platforms that drastically increased the efficiency of our clients’ business',
      'Perform peer code reviews and hold retrospectives to improve the quality of work and improve the robustness of our products',
      'Manage tasks and plan sprints for the development cycle to maintain an effective workflow',
    ],
    technologies: ['React', 'React-Native', 'Redux', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'GIT']
  },
  {
    key:'truckxi',
    company: "JaiMeg, Inc. (DBA Truckxi)",
    title: "Front-End Software Engineer",
    subtitle: "SaaS, E-Commerce, E-Logistics",
    date: "Oct 2017 - April 2019",
    icon: faTruck,
    iconColor: "skyblue",
    description: [
      'Develop and deploy a delivery driver mobile app from the ground up that facilitates hundreds of thousands of dollars in sales per month across multiple clients',
      'Design and implement rolling features on supply chain management and e-commerce platforms that drastically increased the efficiency of our clients’ business',
      'Perform peer code reviews and hold retrospectives to improve the quality of work and improve the robustness of our products',
      'Manage tasks and plan sprints for the development cycle to maintain an effective workflow',
    ],
    technologies: ['React', 'React-Native', 'Redux', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'GIT']
  },
  {
    key: 'smart-mirror',
    company: "UC Davis",
    title: "Experienceless Student",
    subtitle: "Passion Project",
    date: "June - September 2015",
    icon: faLightbulb,
    iconColor: "yellow",
    description: [
      'Develop and deploy a delivery driver mobile app from the ground up that facilitates hundreds of thousands of dollars in sales per month across multiple clients',
      'Design and implement rolling features on supply chain management and e-commerce platforms that drastically increased the efficiency of our clients’ business',
      'Perform peer code reviews and hold retrospectives to improve the quality of work and improve the robustness of our products',
      'Manage tasks and plan sprints for the development cycle to maintain an effective workflow',
    ],
    technologies: ['React', 'React-Native', 'Redux', 'JavaScript', 'HTML', 'CSS', 'JIRA', 'GIT']
  }
];

const Experience = ({ scrollRef }) => {
  const [activeTab, setActiveTab] = useState('stanford');

  return (
    <div id="section" className="container" ref={scrollRef}>
      <h1 className="header">My Experience</h1>
      <div className="d-flex justify-space-between px-5">
        <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
        {experienceEntries.map(entry => (
          <ExperienceCard
            key={entry.key}
            activeTab={activeTab}
            tabKey={entry.key}
            company={entry.company}
            date={entry.date}
            title={entry.title}
            subtitle={entry.subtitle}
            icon={entry.icon}
            iconColor={entry.iconColor}
            description={entry.description}
            technologies={entry.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;

