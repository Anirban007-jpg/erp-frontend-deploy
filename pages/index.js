import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head';
import { API_NAME } from '../config';

const index = () => {

  const head = () => (
    <Head>
        <title>Home Page | {API_NAME}</title>
        <meta name="description"/>
        {/* <link rel="canonical" href={`${DOMAIN}`} /> */}
        <meta property="og:title" content={`Home Page | ${API_NAME}`} />
        <meta name="og:description" content="This is the landing Page" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content={`${DOMAIN}`} /> */}
        <meta property="og:site_name" content={`${API_NAME}`} />
        <meta property="og:image:secure_url" />
        <meta property="og:image:type" content={"image/jpg"} />
    </Head>
)

  return (
    <>
      {head()}
      <Navbar/>
      <div style={{"marginTop":"400px"}}>
        <Footer/>
      </div>
    </>
  )
}

export default index