import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExperienceCard = ({
  activeTab,
  tabKey,
  company,
  title,
  subtitle,
  date,
  icon,
  iconColor,
  description,
  technologies,
}) => {
  return (
  <div id="experience-card" className={`card ${activeTab === tabKey ? '' : 'd-none'}`}>
    <div className="description">
      <FontAwesomeIcon icon={icon} color={iconColor} size="4x" className="mr-3" />
      <div className="top-section">
        <h5 className="title">
          { title }
          {company && <span className="company">{ ` @ ${company}`}</span>}
        </h5>
        <h6 className="subtitle">
          { subtitle }
        </h6>
      </div>
    </div>
    <div className="details">
      <div className="text-muted">{ date }</div>
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