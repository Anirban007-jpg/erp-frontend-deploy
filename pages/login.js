import React from 'react'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'
import Head from 'next/head';
import { withRouter } from 'next/router';
import { API_NAME } from '../config';

const login = ({router}) => {

  const showRedirectMessage = () => {
    if (router.query.message) {
        return <div className="alert alert-danger">{router.query.message}</div>;
    } else {
        return;
    }
  }

  const head = () => (
    <Head>
        <title>Login Page | {API_NAME}</title>
        <meta name="description"/>
        {/* <link rel="canonical" href={`${DOMAIN}`} /> */}
        <meta property="og:title" content={`Login | ${API_NAME}`} />
        <meta name="og:description" content="This is the login Page" />
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
        <LoginForm/>
        <div style={{"marginTop":"40px"}}>
          <Footer/>
        </div>
    </div>
  )
}

export default withRouter(login)