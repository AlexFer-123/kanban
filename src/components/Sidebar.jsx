import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({size = 'w-1/2'}) => {
  return (
    <div className={`${size} flex flex-col p-8 border-r border-r-2 border-zinc-500`}>
      <div className="headerKanban">
        <h1>Kanban</h1>
      </div>
      <div className="headerKanban__sidebarContent ">
        <span className="text-sm font-bold py-2">Todos os quadros</span>
        <div className="boardsList">
          <div className="board">
            <span className='text-base font-bold'>Quadro 1</span>
          </div>
        </div>
        <div className="headerKanban__createNewBoard">
          <span className='text-base font-bold'>+ Criar novo quadro</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
