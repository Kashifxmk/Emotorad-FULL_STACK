import React from 'react';
import { FaTachometerAlt, FaCreditCard, FaCalendarAlt, FaUsers, FaCog } from 'react-icons/fa'; // Importing icons from react-icons/fa
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Board.</h2>
      <ul>
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaCreditCard /> Transactions</li>
        <li><FaCalendarAlt /> Schedules</li>
        <li><FaUsers /> Users</li>
        <li><FaCog /> Settings</li>
      </ul>
      <footer>
        <p>Help</p>
        <p>Contact Us</p>
      </footer>
    </div>
  );
}

export default Sidebar;
