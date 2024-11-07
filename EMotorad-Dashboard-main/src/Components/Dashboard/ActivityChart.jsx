import React from 'react';
// import { Bar } from 'react-chartjs-2';
import { Bar } from 'recharts';
import { BarChart ,Tooltip} from 'recharts';
function ActivityChart() {
  // const data = {
  //   labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  //   datasets: [
  //     {
  //       label: 'User',
  //       data: [400, 200, 300, 400],
  //       backgroundColor: 'rgba(75,192,192,1)',
  //     },
  //     {
  //       label: 'Guest',
  //       data: [300, 400, 200, 300],
  //       backgroundColor: 'rgba(255,99,132,1)',
  //     },
  //   ],
  // };


  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]

  return (
    <div className="activity-chart">
      <h1>Activity</h1>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>

      {/* <h3>Activities</h3>
      <Bar data={data} /> */}
    </div>
  );
}

export default ActivityChart;
