import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './components/sidebar.jsx'

const Dashboard = () => {
  return (
    <div className="h-[100vh] flex flex-col">
      <Sidebar className="w-100px" />
      <h1>Dashboard</h1>
      <Link to="/">retornar a página inicial</Link>
    </div>
  )
}

export default Dashboard
