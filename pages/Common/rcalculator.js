import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { isAuth } from '../../actions/auth'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import CasaCalulator from '../../components/CasaCalulator'

import QuickRatioCalculator from '../../components/QuickRatioCalculator'
import CurrentRatioCalculator from '../../components/CurrentRatioCalculator'
// import BasicDefenseIntervalCalculator from '../../components/BasicDefenseIntervalCalculator'
// import Layout from '../../components/Layout'


const rcalculator = () => {

  const [values,setValues] = useState({
    casa_ratio : 0,
    current_assets: 0,
    current_liabilities: 0,
    Working_Capital: 0,
    Current_Ratio: 0,
    Quick_Ratio : 0,
    Company_Name: '',
    Company_address: '',
    Established_since : '',
    Annual_Revenue: '',
    Company_CEO: '',
    no_of_directors : '',
    FY: '',
    AY:'',
    details_of_directors : ''
  })

  const [isChecked, setIsChecked] = useState(false);

    const {
        casa_ratio,
        current_assets,
        current_liabilities,
        Working_Capital,
        Current_Ratio,
        saveData,
        Quick_Ratio,
        Company_Name,
        Company_address,
        Established_since,
        Annual_Revenue,
        Company_CEO,
        AY,
        no_of_directors,
        details_of_directors
    } = values;


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

    const getData = (data) => {
      setValues({...values, casa_ratio : data.result})      
    }

    const handleChange = name => e => {
      const value = e.target.value;
      setValues({...values,[name]: value,error:''});
    }

    const getData1 = (data) => {
      setValues({...values,current_assets:data.result.ca,current_liabilities:data.result.cl,Working_Capital:data.result.NetWorkingCapital,Current_Rating:data.result.currentRatio})
    }

    const getData2 = (data) => {
      setValues({...values,Current_Ratio:data.result.currentRatio})
    }

    const getData3 = (data) => {
      setValues({...values,Quick_Ratio:data.result.Quick_Ratio})
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
            <div>
              <input
                type="checkbox"
                onChange={(event) => setIsChecked(event.currentTarget.checked)}
                checked={isChecked}
              />{" "}{" "}{" "}
              <button onClick={() => setIsChecked(!isChecked)}>
                <span className="ml-2 text-1.1xl font-bold text-red-700">Want to save data for company</span>
              </button>
            </div>
            <hr className="border-gray-700" />
            <div>
              <div>
                <CasaCalulator onSubmit={getData} />
              </div>
              <div className="mt-4">
                <CurrentRatioCalculator onSubmit1={getData1} onSubmit2={getData2} />
              </div>
              <div>
                <QuickRatioCalculator onSubmit3={getData3}/>
              </div>
              <hr style={{"marginTop": "20px"}}/>
              {isChecked ? 
                  <>
                    <p style={{"marginTop": "20px"}} className="text-2xl text-yellow-500 text-center font-bold">Financial Information of <input type="text" style={{"width": "310px","height": "45px","borderColor": "white","paddingLeft": "5px","backgroundColor": "black","marginLeft": "5px","color": "white"}} className="text-sm" placeHolder="Enter your Company Name" onChange={handleChange('Company_name')}></input> for the FY <input type="text" style={{"width": "310px","height": "45px","borderColor": "white","paddingLeft": "5px","backgroundColor": "black","marginLeft": "5px","color": "white"}} className="text-sm" placeHolder="Enter the Financial Year" onChange={handleChange('FY')}></input> :</p>
                    <hr className="border-gray-700 mt-4"/>
                    <div className="mt-4">
                          <span className="text-0.5xl text-white font-bold">Address Of Company:</span><br/>
                          <input type="text" onChange={handleChange('Company_address')} className="mt-4 px-12 py-2 font-bold text-black placeholder-slate-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                          <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                          </span>
                    </div>
                    <hr className="border-gray-700 mt-4"/>
                    <div className="mt-2">
                          <span className="text-0.5xl text-white font-bold mt-2">Company CEO:</span><br/>
                          <input type="text" onChange={handleChange('Company_CEO')} className="mt-4 px-12 py-2 font-bold text-black placeholder-slate-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                          <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                          </span>
                    </div>
                    <hr className="border-gray-700 mt-4"/>
                    <div className="mt-2">
                          <span className="text-0.5xl text-white font-bold mt-2">Established Since:</span>{" "}
                          <input type="text" onChange={handleChange('Established_since')} className="mt-4 px-12 py-2 width-4 font-bold text-black placeholder-slate-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                          <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                          </span>
                    </div>
                    <hr className="border-gray-700 mt-4"/>
                    <div className="mt-2">
                          <span className="text-0.5xl text-white font-bold mt-2">Assessment Year:</span><br/>
                          <input type="text" value={AY} onChange={handleChange('AY')} className="mt-4 px-12 py-2 width-4 font-bold text-black placeholder-slate-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                          <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                          </span>
                    </div>
                    <hr className="border-gray-700 mt-4"/>
                    <div className="mt-2">
                          <span className="text-0.5xl text-white font-bold mt-2">No of Directors:</span><br/>
                          <input type="text" onChange={handleChange('no_of_directors')} className="mt-4 px-12 py-2 font-bold text-black placeholder-slate-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                          <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                          </span>
                    </div>
                    <hr className="border-gray-700 mt-4"/>
                    <div className="mt-2">
                          <span className="text-0.5xl text-white font-bold mt-2">Annual Revenue:</span><br/>
                          <input type="text" onChange={handleChange('Annual_Revenue')} className="mt-4 px-12 py-2 font-bold text-black placeholder-slate-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                          <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                          </span>
                    </div>
                    <hr className="border-gray-700 mt-4"/>
                    <div className="mt-2">
                        <span className="text-0.5xl text-white font-bold mt-2">Assessment Year:</span><br/>
                        <textarea type="text" rows="13" onChange={handleChange('details_of_directors')} className="mt-4 px-12 py-2 width-4 font-bold text-black placeholder-slate-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <hr className="border-gray-700 mt-4"/>
                    <div className="text-center font-bold text-blue-400 mt-4">
                      Casa Ratio : {casa_ratio/100}<br/>
                      Current Assets: {current_assets}<br/>
                      Current Liabilities : {current_liabilities}<br/>
                      Working Capital : {Working_Capital}<br/>
                      Current Ratio : {Current_Ratio}<br/>
                      Quick Ratio : {Quick_Ratio}<br/>       
                    </div>
                    <hr className="border-gray-700 mt-4"/>
                    <div className="py-8 flex">
                      <button className="w-full bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-2 focus:outline-none" type="submit">
                      <span className="font-bold" style={{"textAlign":"center"}}>
                          Save Data?
                      </span>
                      </button>
                    </div>
                  </>
                  : 
                  <div>
                    
                  </div>
                }
            </div>
          </main>
      </div>
      
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default rcalculator