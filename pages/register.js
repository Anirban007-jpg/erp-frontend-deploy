import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { API_NAME } from '../config';
import Head from 'next/head';
import RegisterForm from '../components/RegisterForm'

const register = () => {

  const head = () => (
    <Head>
        <title>Register Page | {API_NAME}</title>
        <meta name="description"/>
        {/* <link rel="canonical" href={`${DOMAIN}`} /> */}
        <meta property="og:title" content={`Register Page | ${API_NAME}`} />
        <meta name="og:description" content="This is the Registration Page" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content={`${DOMAIN}`} /> */}
        <meta property="og:site_name" content={`${API_NAME}`} />
        <meta property="og:image:secure_url" />
        <meta property="og:image:type" content={"image/jpg"} />
    </Head>
)


  return (
    <div>
        {head()}
        <Navbar/>
        <RegisterForm/>
        <div style={{"marginTop":"60px"}}>
          <Footer/>
        </div>
    </div>
  )
}

export default register