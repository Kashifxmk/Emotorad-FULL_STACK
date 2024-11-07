import React from 'react';
import './SummaryCards.css';

function SummaryCards() {
  return (
    <div className="summary-cards">
      <div className="card">
        <i className="fas fa-dollar-sign card-icon"></i>
        Total Revenue: $2,129,430
      </div>
      <div className="card">
        <i className="fas fa-exchange-alt card-icon"></i>
        Total Transactions: 1,520
      </div>
      <div className="card">
        <i className="fas fa-thumbs-up card-icon"></i>
        Total Likes: 9,721
      </div>
      <div className="card">
        <i className="fas fa-users card-icon"></i>
        Total Users: 9,721
      </div>
    </div>
  );
}

export default SummaryCards;
