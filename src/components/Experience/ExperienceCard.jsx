import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExperienceCard = ({
  activeTab,
  tabKey,
  title,
  subtitle,
  icon,
  iconColor,
  description,
  technologies,
}) => {
  console.log(activeTab, tabKey);
  return (
  <div id="experience-card" className={`card ${activeTab === tabKey ? '' : 'd-none'}`}>
    <div className="description">
      <FontAwesomeIcon icon={icon} color={iconColor} size="4x" className="mr-3" />
      <div className="top-section">
        <div className="title">
          <span>
            { title }
          </span>
        </div>
        <div className="subtitle">
          <span>
            { subtitle }
          </span>
        </div>
      </div>
    </div>
    <div className="details">
      <ul>
        {
          description.map((bullet, index) => (
            <li key={index.toString()}>
              { bullet }
            </li>
          ))
        }
      </ul>
    </div>
    <div className="technologies">
      <span className="text-muted">Technologies</span>
      <div className="tech-list">
        {
          technologies && technologies.map((tech, index) => (
            <div key={index.toString()} className="tech-item">
              { tech }
            </div>
          ))
        }
      </div>
    </div>
  </div>
);
      };

export default ExperienceCard;