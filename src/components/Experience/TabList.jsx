import React from 'react';

const TabList = ({ activeTab, setActiveTab }) => (
  <div id="tab-list">
    <ul className="nav flex-column">
      <div className="divider-text">Work</div>
      <li className={`nav-item link-list-item ${activeTab === 'stanford' ? 'active-tab': ''}`}>
        <button
          className="btn btn-info bg-transparent border-0 nav-link w-100 text-right link-button"
          onClick={() => setActiveTab('stanford')}
        >
          Stanford
        </button>
      </li>
      <li className={`nav-item link-list-item ${activeTab === 'truckxi' ? 'active-tab': ''}`}>
        <button
          className="btn btn-info bg-transparent border-0 nav-link w-100 text-right link-button"
          onClick={() => setActiveTab('truckxi')}
        >
          Truckxi
        </button>
      </li>
      <div className="divider-text">Projects</div>
      <li className={`nav-item link-list-item ${activeTab === 'smart-mirror' ? 'active-tab': ''}`}>
        <button
          className="btn btn-info bg-transparent border-0 nav-link w-100 text-right link-button"
          onClick={() => setActiveTab('smart-mirror')}
        >
          Smart Mirror
        </button>
      </li>
    </ul>
  </div>
);

export default TabList;