import React from 'react';
import './Planner.css';
import TaskBoard from './TaskBoard/index.tsx';

const Planner = () => {
  return (
    <div className="planner-container">
      <div className="left-sidebar">
        <div className="arrow-container">
          <div className="arrow-line"></div>
          <div className="arrow-head"></div>
        </div>
        <ul>
          <li>Life Aspirations</li>
          <li>5-10 Year Landmarks</li>
          <li>Yearly Milestones</li>
          <li>Monthly Goals</li>
          <li>Weekly Achievements</li>
          <li>Daily To-Do</li>
        </ul>
      </div>
      <div className="main-content">
        <TaskBoard />
        <div className="date-box">
          <h2>Notes:</h2>
          <textarea
            className="journal-entry-box"
          />
        </div>
      </div>
    </div>
  );
};

export default Planner;
