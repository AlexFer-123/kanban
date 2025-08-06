import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  console.error('Home component loaded')
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">Sobre</Link>
          </li>
          <li>
            <Link to="/dashboard">Usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
