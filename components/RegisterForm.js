import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { register } from '../actions/auth';


const RegisterForm = () => {

     // initialize the state
     const [values,setValues] = useState({
        PanNo:'',
        name: '',
        email:'',
        address: '',
        mobile_no:'',
        about:'',
        role:'',
        Sex:'',
        error:'',
        success:'',
        password:'',
        confirmedPassword:'',
        showForm: true,
        length: 400,
        loading:false
    });

     // destructure values from state
     const {
        PanNo,
        name,
        email,
        address,
        mobile_no,
        about,
        password,
        role,
        Sex,
        error,
        confirmedPassword,
        success,
        showForm,
        loading,
        length
        } = values;
    
        // Onchange Function
        const handleChange = name => e => {
            const value = e.target.value;
            setValues({...values,[name]: value,error:''});
        }

    // Onsubmit Functions
    const handleSubmit = e => {
        e.preventDefault();
        setValues({...values,loading:true});
        const user = {
            PanNo,
            name,
            email,
            address,
            mobile_no,
            about,
            password,
            role,
            Sex,
            confirmedPassword
        };
            
        register(user).then(data => {
            if(data.error){
                setValues({...values, error: data.error,loading: false});
            }
            else {
                setValues({
                    ...values, 
                    success: data.message,
                    name: '',
                    email:'',
                    address: '',
                    mobile_no:'',
                    about:'',
                    password:'',
                    role:'',
                    twitter:'',
                    facebook:'',
                    youtube:'',
                    confirmed_password:'',
                    showForm:false,
                    loading:false
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
    {success ? 
        <div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" style={{"marginTop":"70px", "marginLeft":"90px", "marginRight":"90px"}} role="alert">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>{success}</p>
        </div> : ''
    }
    {showForm && (    
            <div className="font-roboto" style={{"marginTop":"70px"}}>
                <div className="flex w-3/4 mx-auto my-8">
                    <div className="bg-gray-100 w-2/3 mx-auto px-20">
                            <h1 className="text-2xl font-bold text-gray-700 py-6">Registration Form</h1>
                            <hr className="mx-0"/>
                            <div className="py-8">
                                <div className="flex mb-4">
                                    <span className="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">1</span>
                                    <span className="font-bold text-gray-700">Important Information</span>
                                </div>
                                <div>
                                    <label className="text-red-500 font-semibold">User ID:</label>
                                    <input type="text" value={PanNo} onChange={handleChange('PanNo')} placeholder="Enter your PAN ID to be registered" className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:green-border-500"></input>
                                </div>
                            </div><hr/>
                            <div className="py-8">
                                <div className="flex mb-4">
                                    <span className="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">2</span>
                                    <span className="font-bold text-gray-700">Personal Information</span>
                                </div>
                                <div>
                                    <label className="text-red-500 font-semibold">Name:</label>
                                    <input type="text" value={name} onChange={handleChange('name')} placeholder="Enter your Name..." className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:green-border-500"></input>
                                </div>
                                <div>
                                    <label className="text-red-500 font-semibold">Email:</label>
                                    <input type="text" value={email} onChange={handleChange('email')} placeholder="Enter your Email to be registered..." className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:green-border-500"></input>
                                </div>
                                <div>
                                    <label className="text-red-500 font-semibold">Address:</label>
                                    <textarea type="text" value={address} onChange={handleChange('address')} rows="3" placeholder="Enter your Address given in PAN..." className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:green-border-500"></textarea>
                                </div>
                                <div>
                                    <label className="text-red-500 font-semibold">Mobile Number:</label>
                                    <input type="text" value={mobile_no} onChange={handleChange('mobile_no')} placeholder="Enter your mobile number to be registered..." className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:green-border-500"></input>
                                </div>
                                <div>
                                    <label className="text-red-500 font-semibold">Tell Something about yourself: {((length-about.length) <= 0) ? (<><p style={{color: 'red'}}>[Word Limit reached!!!]</p></>) : (<><p style={{color: 'blue'}}>[{length-about.length} words left]</p></>)}</label>
                                    <textarea type="text" value={about} disabled={(length-about.length) <= 0} onChange={handleChange('about')} rows="5" className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:green-border-500"></textarea>
                                </div>
                                <div>
                                    <label className="text-red-500 font-semibold">Choose your role:</label>
                                    <select value={role} onChange={handleChange('role')} className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:green-border-500">
                                        <option value=''>Select Role</option>
                                        <option value='Taxpayer'>Customer</option>
                                        <option value='CA'>Admin</option>
                                        <option value='CMA'>Admin2</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-red-500 font-semibold">Sex:</label>
                                    <select value={Sex} onChange={handleChange('Sex')} className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:green-border-500">
                                        <option value='Male'>MALE</option>
                                        <option value='Female'>FEMALE</option>
                                    </select>
                                </div>
                            </div><hr/>
                            <div className="py-8">
                                <div className="flex mb-4">
                                    <span className="flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500">3</span>
                                    <span className="font-bold text-gray-700">Set Password</span>
                                </div>
                                <div>
                                    <label className="text-red-500 font-semibold">Password:</label>
                                    <input type="text" value={password} onChange={handleChange('password')} placeholder="Enter your PAN ID to be registered" className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:green-border-500"></input>
                                </div>
                                <div>
                                    <label className="text-red-500 font-semibold">Confirm Password:</label>
                                    <input type="text" value={confirmedPassword} onChange={handleChange('confirmedPassword')} placeholder="Enter your PAN ID to be registered" className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:green-border-500"></input>
                                </div>
                            </div><hr/>
                            <div className="py-8 flex justify-end">
                                <button onClick={handleSubmit} className="flex items-center bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-4 py-2 focus:outline-none">
                                    <span className="flex">
                                        <FaPlus style={{"marginTop":"4px", "marginRight":"8px"}} />
                                        <strong>Register</strong>
                                    </span>
                                </button>
                            </div>
                    </div>
                    <div className="w-1/3 bg-blue-600">
                        ok
                    </div>
                </div>
            </div>   
        )
    }
    </>
  )
}

export default RegisterForm