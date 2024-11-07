import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default Home
