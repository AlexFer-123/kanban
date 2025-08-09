import React from 'react'
import { Link } from 'react-router-dom'

const DashboardView = ({size = 'w-3/4'}) => {
  return (
    <div className={`${size} h-[100vh] flex flex-col`}>
      <div className="dashboardView__header flex justify-between items-center p-8 border-b-1  ">
        <Link to="/"><h1 className='text-white'>Plataform Launch</h1></Link>

        <div className="dashboardView__header--options flex items-center gap-4 ">          
            <div className="dashboardView__header--addNewTask">
                <span className='text-base font-bold'>+ Adicionar nova tarefa</span>
            </div>

            <div className="dashboardView__header--iconMenuOptions">
                <span className='text-base font-bold'>...</span>
            </div>
        </div>
      </div>
      <div className="dashboardView__content p-8 h-full bg-[#21222D]">
        <div className='dashboardView__columns'></div>
            <div className='dashboardView__column'>
                <div className='dashboardView__columnHeader mb-4'>
                    <span className='text-white text-base font-bold'>TO DO (4)</span>
                </div>
                <div className='dashboardView__cards'>
                    <div className='dashboardView__card flex flex-col w-1/5 p-4 rounded-lg'>
                        <span className='dashboardView__cardTitle text-xl font-bold text-white'>Card title</span>
                        <span className='dashboardView__cardCountTaks text-base font-bold text-zinc-300'>Card title</span>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default DashboardView
