import React from 'react';
import './Menu.css'; 

const Menu = () => {
  return (
    <nav className="menu-container">
      <ul className="menu-list">
        <li className="menu-item"><a href="/">HOME</a></li>
        <li className="menu-item"><a href="/journal">JOURNAL</a></li>
        <li className="menu-item"><a href="/planner">PLANNER</a></li>
        <li className="menu-item"><a href="/account">ACCOUNT</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
