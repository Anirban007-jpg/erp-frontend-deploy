// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { API_NAME } from '../config'
// import { AiFillTrademarkCircle } from "react-icons/ai";
import {withRouter} from "next/router";
import Router from 'next/router';
import Link from 'next/link';
import nProgress from 'nprogress';
import "../node_modules/nprogress/nprogress.css";
import { FaBars } from 'react-icons/fa';


Router.onRouteChangeStart = url => nProgress.start();
Router.onRouteChangeComplete = url => nProgress.done();
Router.onRouteChangeError = url => nProgress.done();



const styleChange = (router,key) => {
    if (router.pathname === key){
      return {color:"#192ae6" , fontWeight:'800', fontSize: '15px'}
    }else{
      return {color:"Black" , fontSize: '14px', fontWeight:'700'}
    }
}
// library.add(faAlicorn);


const Navbar = ({router}) => {

  let [open,setOpen]=useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center flex-inline bg-sky-400 py-2 md:px-8 px-4'>
        <div className='text-xl cursor-pointer flex items-center font-mono font-bold text-gray-800'>
          <span className='text-xl text-indigo-600 mr-1 pt-2'>
          <ion-icon name="logo-ionic"></ion-icon>
          </span>
          {API_NAME}
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
          <FaBars name={open ? 'close':'menu'}></FaBars>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 left-2 absolute md:static ml-auto md:z-auto z-[-1] w-full md:w-auto md:pl-0 pl-2 transition-all duration-500 ease-in ${open ? 'top-16 ':'top-[-490px]'}`}>
          <li className='md:ml-2 text-xl md:my-0 my-7'>
            <Link href="/">
              <a style={styleChange(router,"/")}>
                HOME
              </a>
            </Link>
          </li>
        </ul>
        <ul className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static ml-2 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-2 transition-all duration-500 ease-in ${open ? 'top-5 ':'top-[-520px]'} }`}>
          <li className='md:ml-2 text-xl md:my-0 my-7'>
            <Link href="/register">
              <a style={styleChange(router,"/register")}>
                REGISTER
              </a>
            </Link>
          </li>
        </ul>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute ml-2 md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-2 transition-all duration-500 ease-in ${open ? 'top-10 ':'top-[-460px]'} '}`}>
          <li className='md:ml-2 text-xl md:my-0 my-7'>
            <Link href="/login">
              <a style={styleChange(router,"/login")}>
                LOGIN
              </a>
            </Link>
          </li>
        </ul>      
      </div>
    </div>
  )
}

export default withRouter(Navbar);