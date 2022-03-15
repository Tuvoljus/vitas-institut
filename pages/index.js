import React from 'react'
import Head from 'next/head'

import Script from 'next/script'
//import dynamic from 'next/dynamic'
//const MainPage = dynamic(() => import('../components/MainPage'))
import MainPage from '../components/MainPage'


const IndexPage = () => {  
    return (
        <>
        <Head>
          <title>Vitas Institut</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script
        src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserverEntry%2CIntersectionObserver"
        strategy="beforeInteractive"
      />      
        <MainPage />
        </>
      );
        
    
};

export default IndexPage;