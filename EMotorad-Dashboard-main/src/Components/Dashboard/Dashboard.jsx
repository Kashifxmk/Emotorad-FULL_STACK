import React, { useState } from 'react';
import { FaUserCircle, FaBell } from 'react-icons/fa';  // Import the profile and bell icons
import SummaryCards from './SummaryCards.jsx';
import ActivityChart from './ActivityChart.jsx';
import ProductChart from './ProductChart.jsx';
import './Dashboard.css';
import bar_chart from "../../assets/bar-chart.png";
import pie_chart from "../../assets/pie-chart.png";

// Modal component for adding profile
function AddProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Profile</h2>
        <form>
          <div className="form-group">
            <label htmlFor="profile-name">Profile Name</label>
            <input type="text" id="profile-name" placeholder="Enter profile name" />
          </div>
          <div className="form-group">
            <label htmlFor="profile-description">Description</label>
            <textarea id="profile-description" placeholder="Enter description"></textarea>
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Add Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const openModal = () => setIsModalOpen(true); // Open the modal
  const closeModal = () => setIsModalOpen(false); // Close the modal

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>

        {/* Profile and Bell Icons */}
        <div className="icons-container">
          <FaUserCircle className="icon profile-icon" />
          <FaBell className="icon bell-icon" />
        </div>
      </div>

      <SummaryCards />

      <div className='activity'>
        <h1>Activities</h1>
        <div className='act-mid-row'>
          <p className='bar-months'>May-June 2021</p>
          <div className='labels'>
            <div className='label-each'>
              <div className='dot green'></div>
              <p>Guest</p>
            </div>
            <div className='label-each'>
              <div className='dot red'></div>
              <p>User</p>
            </div>
          </div>
        </div>
        <img src={bar_chart} alt="" />
      </div>

      <div className='product'>
        <div className='product-each'>
          <div className='pro-top'>
            <h2>Top Profiles</h2>
            <p>May-June 2021</p>
          </div>
          <div className='pro-charts'>
            <img src={pie_chart} alt="" />

            <div className='pro-info'>
              <div className='pro-info-each'>
                <div className='dot-info'>
                  <div className='dot green'></div>
                  <p>T-Shirt</p>
                </div>
                <p className='dot-per'>55%</p>
              </div>

              <div className='pro-info-each'>
                <div className='dot-info'>
                  <div className='dot yellow'></div>
                  <p>Pants</p>
                </div>
                <p className='dot-per'>31%</p>
              </div>

              <div className='pro-info-each'>
                <div className='dot-info'>
                  <div className='dot red'></div>
                  <p>Jacket</p>
                </div>
                <p className='dot-per'>14%</p>
              </div>
            </div>
          </div>
        </div>

        <div className='product-each product-add' onClick={openModal}>
          <div className='add'>+</div>
          <p>Add profile</p>
        </div>
      </div>

      {/* Modal for adding profile */}
      <AddProfileModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default Dashboard;
