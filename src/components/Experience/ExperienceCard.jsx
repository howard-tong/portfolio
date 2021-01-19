import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExperienceCard = ({
  iconName,
  iconColor,
  jobTitle,
  industry,
  jobDescription,
  technologies,
}) => (
  <div id="company-section" className="card">
    <div className="company-description">
      <FontAwesomeIcon icon={iconName} color={iconColor} />
      <div className="company-right-section">
        <div className="company-title">
          <span>
            { jobTitle }
          </span>
        </div>
        <div className="company-industry">
          <span>
            { industry }
          </span>
        </div>
      </div>
    </div>
    <div className="company-job-description">
      <ul>
        {
          jobDescription.map((description, index) => (
            <li key={index.toString()}>
              { description }
            </li>
          ))
        }
      </ul>
    </div>
    <div className="technologies">
      <span className="gray-text">Technologies</span>
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

export default ExperienceCard;