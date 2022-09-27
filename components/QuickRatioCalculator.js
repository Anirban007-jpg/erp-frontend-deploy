import React, { useState } from 'react'
import { quickratiocal } from '../actions/ratio';

const QuickRatioCalculator = (props) => {

  const [values,setValues] = useState({
    ca: '',
    error: '',
    PE: '',
    Quick_Assets: '',
    inventories: '',
    cl: '',
    Quick_Ratio: '',
    loading:false
  })

  const {ca,error,PE,inventories,Quick_Assets,cl,Quick_Ratio,loading} = values;

  const handleChange = name => e => {
    const value = e.target.value;
    setValues({...values,[name]: value,error:''});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({...values,loading:true})
    const data = {
      ca,
      PE,
      inventories,
      cl
    }

    quickratiocal(data).then(response => {
      if (response.error){
        setValues({...values, error: response.error,loading: false})
      }
      else{
        props.onSubmit3(response);
        setValues({...values, loading:true,Quick_Assets:response.result.Quick_Assets,Quick_Ratio:response.result.Quick_Ratio});
      }
    })

  }

  return (
    <div className="mt-4">
        <h1 className="font-bold text-2xl text-yellow-500">Quick Ratio Calculator:</h1>  
        <form className="bg-gray-700 p-4 mt-4 mx-6 rounded-lg text-center" noValidate>
                <div className="flex space-x-4 mr-2 ml-2 mt-2">
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">CURRENT ASSETS</span><br/>
                        <input type="text" placeholder="Enter the value of current assets calculated above" value={ca} onChange={handleChange("ca")} className="mt-4 px-3 py-3 font-bold text-black placeholder-slate-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">PREPAID EXPENSES</span><br/>
                        <input type="text" placeholder="Enter the value of prepaid expenses" value={PE} onChange={handleChange("PE")} className="mt-4 px-3 py-3 font-bold text-black placeholder-slate-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                    <div className="relative mb-3 w-1/3">
                        <span className="text-sm font-bold mb-4">INVENTORY</span><br/>
                        <input type="text" placeholder="Enter the calculated value of inventory" value={inventories} onChange={handleChange("inventories")} className="mt-4 px-3 py-3 font-bold text-black placeholder-slate-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <h1 className="text-blue-500 font-bold mt-2">QUICK ASSETS:</h1>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-full">
                        <input type="text" value={Quick_Assets} placeholder="Quick Assets(Auto-Calculated)" disabled className="mt-2 px-3 py-3 bg-gray-300 placeholder-slate-300 text-blue-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <h1 className="text-blue-500 font-bold mt-2">CURRENT LIABILITY:</h1>
                <div className="flex space-x-4 mt-2 mr-2 ml-2">
                    <div className="relative mb-3 w-full">
                        <input type="text" value={cl}  onChange={handleChange('cl')} placeholder="Enter Value of current Liabilities" className="mt-2 px-3 py-3 bg-white placeholder-slate-300 text-blue-500 font-bold relative rounded text-0.5xl border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                        <span className="leading-snug font-normal absolute text-center text-red-500 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="mt-2 mb-10 bg-gray-400 rounded-lg">
                  {/* Design this area*/}
                  {Quick_Ratio}
                </div>
                <hr/>
                <div className="mt-2">
                <h1 className="font-semibold text-white text-xl">Interpretation:</h1>
                    
                </div>
                <br/>
                <div className="mt-2 rounded-lg">
                  <button onClick={handleSubmit} className={"mt-2 bg-blue-500 mb-2 hover:bg-blue-400 text-white w-full font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"}>
                      CALCULATE QUICK RATIO
                  </button><br/>
                  <button type="reset" className={"bg-blue-500 hover:bg-red-400 text-white w-full mt-2 mb-2 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"}>
                      RESET
                  </button>
                </div>  

        </form>
    </div>
  )
}

export default QuickRatioCalculator