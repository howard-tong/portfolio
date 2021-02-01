import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Margins = () => (
  <div id="margins">
    <div className="d-flex justify-content-between align-items-end">
      <div className="margin-email">
        <a href="mailto:howard.tong13@gmail.com" className="primary-color">howard.tong13@gmail.com</a>
      </div>
      <ul className="margin-social-media">
        <li>
          <a href="https://github.com/howard-tong">
            <FontAwesomeIcon className="primary-color" icon={faGithub} size="lg" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/howard-tong">
            <FontAwesomeIcon className="primary-color" icon={faLinkedinIn} size="lg" />
          </a>
        </li>
      </ul>
    </div>
    <div className="margin-decorations" />
  </div>
);

export default Margins;