import React, { lazy } from 'react'
import dynamic from 'next/dynamic'
const Menue = dynamic(() => import('./Menue.js'))
const Footer = dynamic(() => import('./Footer'))
const StripeContact = dynamic(() => import('./StripeContact'))

 


const layout = ( {children} ) => {
    return (
        <>  
            {/* <StripeContact /> */}
            <Menue />            
            {children}
            <Footer />
        </>
    )
} 

export default layout