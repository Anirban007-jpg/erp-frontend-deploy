import React, { useState } from 'react'
import {FaLockOpen} from 'react-icons/fa'
import { casa } from '../actions/ratio';


const CasaCalulator = (props) => {

    const [values,setValues] = useState({
        current_deposits_savings_deposits : "",
        savings_deposits : "",
        casa_ratio : 0,
        error:""
    })

    const {
        current_deposits_savings_deposits,
        total_deposits,
        casa_ratio,
        error
    } = values;

    const handleChange = name => e => {
        const value = e.target.value;
        setValues({...values,[name]: value,error:''});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values, loading: true})
        const data ={current_deposits_savings_deposits, total_deposits}
        
        casa(data).then(data => {
            if (data.error){
                setValues({...values, error: data.error,loading: false});
            }
            else {
                props.onSubmit(data);
                setValues({
                    ...values, 
                    current_deposits_savings_deposits: "",
                    total_deposits: "",
                    casa_ratio: data.result,
                    loading: false,
            })
            }
        })


        
    }

    return (
    <>
        {error ? 
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" style={{"marginTop":"70px", "marginLeft":"90px", "marginRight":"90px"}} role="alert">
            <strong className="font-bold">Holy smokes! </strong>
            <span className="block sm:inline">{error}</span>
            </div> 
            :
            ''
        }
        <h1 className="font-bold text-2xl text-yellow-500">Current and Savings Account Ratio Calculator:</h1>
        <form className="bg-gray-700 p-4 mt-4 mx-6 rounded-lg text-center" noValidate>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
                <input value={current_deposits_savings_deposits} onChange={handleChange('current_deposits_savings_deposits')} type="text" placeholder="Enter Current Deposits" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <FaLockOpen></FaLockOpen>
                </span>
            </div>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
                <input value={total_deposits} onChange={handleChange('total_deposits')} type="text" placeholder="Enter Total Deposits" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"/>
                <span className="leading-snug font-normal absolute text-center text-slate-300 bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                <FaLockOpen></FaLockOpen>
                </span>
            </div>
            <hr/>
            {casa_ratio == 0 ? <><p className="mt-4 font-bold text-blue-500"><span> The current deposits to savings deposit ratio is 0% </span></p></> : <><p className="mt-4 font-bold text-blue-500"><span>  The current deposits to savings deposit ratio is {casa_ratio}% </span></p></>}
            <hr className="mt-4"/>
            <div className="mt-2">
                <h1 className="font-semibold text-white text-xl">Interpretation:</h1>
                {casa_ratio < 100 ? 
                (
                    <div className="mt-2">
                        {casa_ratio === 0 ? (
                            <>
                                
                            </>
                        ):(<span className="font-semibold">Banks can increase CASA ratio by offering a higher rate of interest on deposits which can attract more deposits, on the other hand it will have to pay higher interest rates to the depositors.CASA (%) of any bank is an important financial component to look at when analyzing a Bank. It tells us about the profitability and operating efficiency of a bank.</span>)}
                        
                    </div>
                ) : (
                    <div className="mt-2">
                        <span className="font-semibold">Banks can increase CASA ratio by offering a higher rate of interest on deposits which can attract more deposits, on the other hand it will have to pay higher interest rates to the depositors.CASA (%) of any bank is an important financial component to look at when analyzing a Bank. It tells us about the profitability and operating efficiency of a bank.</span>
                    </div>
                )}
            </div>
            <div className="py-8 flex">
                <button onClick={handleSubmit} className="w-full bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-2 focus:outline-none" type="submit">
                <span className="font-bold" style={{"textAlign":"center"}}>
                    Calculate
                </span>
                </button>
            </div>
        </form>
    </>
  )
}

export default CasaCalulator