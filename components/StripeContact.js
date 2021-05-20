import Link from 'next/link'
import Image from 'next/image'
import { useAmp } from 'next/amp'


export const config = { amp: 'hybrid' }

const StripeContact = () => {    
    return (
        <>                          
            <div className="container text-center" style={{marginBottom: '100px'}}>
                <div>Tel: 089 - 23 23 06 70</div>        
                    
            </div>            
        </>
    )
}

export default StripeContact