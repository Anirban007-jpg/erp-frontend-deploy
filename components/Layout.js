import React from 'react'
import Sidebar  from './Sidebar'
import StatsCard from './StatsCard'

const Layout = () => {
  return (
    <div className="flex w-full min-h-screen font-sans bg-gray-800">
        <Sidebar/>
        <main className="flex flex-col flex-1 gap-6 p-4">
          <header>
            <h1 className="text-3xl font-semibold leading-loose text-white">Dashboard</h1>
            <div className="text-gray-200">
            {(new Date()).toLocaleString()}
            </div>
          </header>
          <hr className="border-gray-700" />
          <StatsCard/>
        </main>
    </div>

  )
}

export default Layout