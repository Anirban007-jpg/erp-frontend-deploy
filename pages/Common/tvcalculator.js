import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { isAuth } from '../../actions/auth'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'


const tvcalculator = () => {


  // page protection
    useEffect(() => {
      if(!isAuth()){
        Router.push('/')
      }
    }, [])
  

    // page protection 2nd phase
    if (isAuth() && isAuth().role === 'CA' && isAuth().role !== 'CMA'){
      Router.push('/Admin/Dashboard');
    }
    else  if (isAuth() && isAuth().role === 'Taxpayer' && isAuth().role !== 'CMA'){
      Router.push('/Customer/Dashboard');
    }

    const handleChange = name => e => {
      const value = e.target.value;
      setValues({...values,[name]: value,error:''});
    }
  
  return (
    <div>
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
          
          </main>
      </div>
      
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default tvcalculator