import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar.jsx'
import DashboardView from './components/DashboardView.jsx'

const Dashboard = () => {
  return (
    <div className="h-[100vh] flex">
      <Sidebar size="w-1/4"/>
      <DashboardView size="w-3/4"/>
    </div>
  )
}

export default Dashboard
