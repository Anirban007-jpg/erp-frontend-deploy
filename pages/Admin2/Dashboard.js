import React, { useEffect } from 'react'
import Head from 'next/head';
import { API_NAME } from '../../config';
// import Layout from '../../components/Layout';
import { getCookie, isAuth, logout } from '../../actions/auth';
import Router from 'next/router';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import StatsCard from '../../components/StatsCard';


const Dashboard = () => {

    const head = () => (
        <Head>
            <title>DASHBOARD | {API_NAME}</title>
            <meta name="description"/>
            {/* <link rel="canonical" href={`${DOMAIN}`} /> */}
            <meta property="og:title" content={`Dashboard Page | ${API_NAME}`} />
            <meta name="og:description" content="This is the Admin landing Page" />
            <meta property="og:type" content="website" />
            {/* <meta property="og:url" content={`${DOMAIN}`} /> */}
            <meta property="og:site_name" content={`${API_NAME}`} />
            <meta property="og:image:secure_url" />
            <meta property="og:image:type" content={"image/jpg"} />
        </Head>
    )
    
    const token = getCookie('token');

      // page protection
      useEffect(() => {
        if (!token){
          localStorage.removeItem('user');
          Router.push('/')
        }
      }, [])

      if (!process.browser){
        return null;
      }

         // page protection 2nd phase
        if (isAuth() && isAuth().role === 'CA'){
            Router.push('/Admin/Dashboard');
        }
        else  if (isAuth() && isAuth().role === 'Taxpayer'){
            Router.push('/Customer/Dashboard');
        }

  return (
    <div>
        {head()}
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
            <StatsCard/><hr className="border-gray-700"/>
          </main>
      </div>
        <div>
          <Footer/>
        </div>  
    </div>
  )
}

export default Dashboard