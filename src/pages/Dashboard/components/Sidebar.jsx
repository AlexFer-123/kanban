import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=" flex flex-col">
      <h1>Sidebar</h1>
      <Link to="/">retornar a página inicial</Link>
    </div>
  )
}

export default Sidebar
