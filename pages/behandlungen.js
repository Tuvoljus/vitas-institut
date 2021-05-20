import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAmp } from 'next/amp'

import SubMenue from '../components/SubMenue'


export const config = { amp: 'hybrid' }

const SectionBehandlungen = () => {
    const [isCollapse, setIsCollapse] = useState('');
    
    // const [showSublink, setShowSublink] = useState('');

    // const showCollapse1 = () => {
    //     if (showSublink != 'show'){
    //     setShowSublink('show')
    // }else {
    //     setShowSublink('');
    // }
    // };
    
    const toggle = () => {
        const id = id;
        console.log(id);
        
    };

    return (
        <> 
            <div className="jumbotron" style={{padding: '3rem', backgroundColor: '#d7d7d7'}}>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-4">
                            <h1>                                
                                Einführung Behandlungen
                            </h1>
                        </div>
                        <div className="col col-md-4 align-self-center">
                            <p>
                                Sie bekommen einen kurzen Überblick über die wichtigsten Behandlungsmöglichkeiten. <br /><br />
                                Oft bewährt sich eine Kombination einzelner Techniken. <br /> <br />
                                Durch Ihre Rückmeldungen während und nach den Behandlungen sind diese ganz individuell auf Ihre aktuellen Bedürfnisse abgestimmt.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-md-3">
                        <SubMenue />
                    </div>
                    <div className="col col-md-9">
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionBehandlungen