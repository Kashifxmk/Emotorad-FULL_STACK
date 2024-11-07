import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function ProductChart() {
  const data = {
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
    datasets: [
      {
        data: [55, 31, 14],
        backgroundColor: ['#4CAF50', '#FFCE56', '#FF6384'],
      },
    ],
  };

  return (
    <div className="product-chart">
      <h3>Top Products</h3>
      <Doughnut data={data} />
    </div>
  );
}

export default ProductChart;
