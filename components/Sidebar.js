import React from 'react'
import {withRouter} from "next/router";
import Router from 'next/router';
import Link from 'next/link';
import {MdLogout} from 'react-icons/md';
import { FaCalculator, FaHome } from 'react-icons/fa';
import { logout } from '../actions/auth';
import { API_NAME } from '../config';





const Sidebar = ({router}) => {
  return (
    <div className="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
        <span className="text-0.5xl text-blue-500 font-bold">{API_NAME}</span>
        <hr style={{"border":"0.5px solid white","width":"50px"}}/>
        {/* <button className="p-2 bg-opacity-20 rounded-xl bg-orange-500">
            <FcShop size={20} color="orange" />
        </button> */}
        <div className="flex flex-col gap-y-0 items-end self-end">
            <div className={ router.pathname === "/Admin2/Dashboard" ? "bg-gray-800 rounded-l-xl relative before:absolutebefore:h-8 before:w-4 before:-top-8 before:rounded-br-xl before:right-0":""}>
                <button className="p-4 my-4 mr-4 ml-3 rounded-xl">
                    <Link href="/Admin2/Dashboard">
                        <a>
                          <FaHome size={20} className={router.pathname === "/Admin2/Dashboard" ? "text-white rounded shadow-primary bg-orange-500": ""} />
                        </a>
                    </Link>
                </button>
            </div>
            <div className={ router.pathname === "/Common/rcalculator" ? "bg-gray-800 rounded-l-xl relative before:absolutebefore:h-8 before:w-4 before:-top-8 before:rounded-br-xl before:right-0":""}>
                <button className="p-4 my-4 mr-4 ml-3 rounded-xl">
                    <Link href="/Common/rcalculator">
                        <a>
                          <FaCalculator size={20} className={router.pathname === "/Common/rcalculator" ? "text-white rounded shadow-primary bg-orange-500": ""} />
                        </a>
                    </Link>
                </button>
            </div>
            <div>
                  <a className="p-4 my-1 mr-10 ml-1" style={{"cursor": 'pointer', "color":"white"}} onClick={() => logout(() => {Router.push('/')})}>
                    <MdLogout size={20}/>
                  </a>
            </div>
        </div>
    </div>
  )
}

export default withRouter(Sidebar)