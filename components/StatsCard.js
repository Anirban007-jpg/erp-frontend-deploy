import React from 'react'
import { FaDollarSign, FaJediOrder, FaUser } from 'react-icons/fa'

const StatsCard = () => {
  return (
    <div className="flex gap-6">
        <div className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
            <div className="flex items-center">
                <div className="p-2 bg-gray-800 rounded-lg">
                    <FaUser size={20} color="blue" />
                </div>
                <span className="text-xs font-medium ml-3 text-yellow-500"></span>
            </div>
            <div className="text-3xl font-semibold text-white">0</div><hr/>
            <div className="text-sm font-semibold text-white">Total Taxpayers</div>
        </div>
        <div className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
            <div className="flex items-center">
                <div className="p-2 bg-gray-800 rounded-lg">
                    <FaJediOrder size={20} color="blue" />
                </div>
                <span className="text-xs font-medium ml-3 text-yellow-500"></span>
            </div>
            <div className="text-3xl font-semibold text-white"></div>
            <hr/>
            <div className="text-sm font-semibold text-white">Under Development</div>    
        </div>
        <div className="flex flex-col p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
        <div className="flex items-center">
                <div className="p-2 bg-gray-800 rounded-lg">
                    <FaDollarSign size={20} color="blue" />
                </div>
                <span className="text-xs font-medium ml-3 text-yellow-500"></span>
            </div>
            <div className="text-3xl font-semibold text-white">$ 0</div><hr/>
            <div className="text-sm font-semibold text-white">Total Revenue</div>
        </div>
    </div>
  )
}

export default StatsCard