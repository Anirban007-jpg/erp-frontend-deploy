import Link from 'next/link'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { FaBars, FaGoogle } from 'react-icons/fa'
import { authenticate, isAuth, login } from '../actions/auth'
import { API_NAME } from '../config'

const LoginForm = () => {

    const [values, setValues] = useState({
        PanNo: '',
        password: '',
        loading: false,
        message: '',
        error: '',
        showForm: true
    }); 

    const {PanNo,password,loading,message,error,showForm} = values;

    useEffect(() => {
        isAuth() &&  Router.push('/')
    }, [])

    const handleChange = (name) => e => {
             setValues({...values, error: '', [name]: e.target.value});  
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({...values, loading: true, error:''});
        const user = {PanNo,password};
        login(user)
        .then(data =>{
            if(data.error){
                setValues({...values, error: data.error, loading:false});
            }else {
                // save user token to cookie
                // save user info to localstorage
                // authenticate user
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === "Taxpayer"){
                        Router.push('/Taxpayer/Dashboard');
                    } else if (isAuth() && isAuth().role === "CA"){
                        Router.push('/Admin/Dashboard');
                    } else if (isAuth() && isAuth().role === "CMA"){
                        Router.push('/Admin2/Dashboard');
                    }
                })
            }
        })
         

    }

  return (
        <>
        {error ? 
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" style={{"marginTop":"50px", "marginLeft":"400px", "paddingLeft":"400px"}} role="alert">
            <strong className="font-bold">Holy smokes! </strong>
            <span className="block sm:inline">{error}</span>
            </div> 
            :
            ''
        }

        <div className="flex flex-col md:flex-row h-screen items-center">
            <div className="h-screen lg:block md:w-1/2 xl:w-2/3">
                <img className="w-full h-full mt-10 object-cover" src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" alt="" />
            </div>
            <div className="bg-white items-center justify-center flex md:mx-auto md:max-w-md lg:max-w-full w-full md:w-1/2 xl:W-1/3 px-6 lg:px-16 xl:px-12" style={{'marginTop':'60px'}}>
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 ml-22">Log In to your account</h1>
                    <form className="mt-6" onSubmit={handleSubmit} noValidate>
                        <div>
                            <label className="block text-blue-500 font-bold">User ID:</label>
                            <input value={PanNo} onChange={handleChange('PanNo')} type="text" placeholder="Enter your PAN ID" className="w-full bg-gray-300 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none mt-2 h-10 px-4 py-3"></input>
                        </div>
                        <div className="mt-4">
                            <label className="block text-blue-500 font-bold">Password:</label>
                            <input value={password} onChange={handleChange('password')} type="password" className="w-full bg-gray-300 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none mt-2 h-10 px-4 py-3"></input>
                        </div>
                        <div className="text-right mt-2">
                            <Link href="/">
                                <a className="text-sm font-semibold text-gray-700 focus:text-blue-700">
                                    Forgot Password ?
                                </a>
                            </Link>
                        </div>
                        <button className="w-full block bg-blue-500 hover:bg-blue-400 px-4 py-3 mt-6 rounded-lg font-bold text-white " type="submit">Log In</button>
                        <hr className="my-6 border-gray-500 w-full" />
                        <button type="submit" class="w-full block bg-white border-gray-300 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border">
                            <div className="flex items-center justify-center">
                                <FaGoogle size={15}/>
                                <span className="ml-4">
                                    Log In with Google
                                </span>
                            </div>
                        </button>
                        <p className="mt-8">
                            Need an Account? 
                            <Link href="/register">
                                <a className="text-yellow-500 font-bold hover:text-blue-700">
                                    Create an account
                                </a>
                            </Link>
                        </p>

                        <p className="text-sm text-gray-500 mt-12">
                            &copy; 2022 Login Page Created by {API_NAME}
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )

  }

export default LoginForm