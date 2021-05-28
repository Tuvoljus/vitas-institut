import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { useAmp } from 'next/amp'
// import {M2} from '../components/submenue/M2'
import styles from '../scss/Submenue.module.scss';
// import SubMenue from '../components/SubMenue'
// import MainBehandlung from '../components/MainBehandlung'


// export const config = { amp: 'hybrid' }

const SectionBehandlungen = () => {
    const [isCollapseOne, setIsCollapseOne] = useState('');
    const [isCollapseTwo, setIsCollapseTwo] = useState('');
    const [isCollapseThree, setIsCollapseThree] = useState('');
    const [isShow, setShow] = useState('');

    function handleClick(){
        console.log("I was clicked");
        setShow('show');
        console.log(isShow)
    };

    const handleShow = () => {
        if(isShow != 'show'){
            setShow('show')
        } else {
            setShow('')
        }        
    }

    const toggleOne = () => {
        if (isCollapseOne != 'show') {
          setIsCollapseOne('show')
        } else {
            setIsCollapseOne('')
      }         
    };

    const toggleTwo = () => {
        if (isCollapseOne != 'show') {
          setIsCollapseTwo('show')
        } else {
            setIsCollapseTwo('')
      }         
    };

    const toggleThree = () => {
        if (isCollapseOne != 'show') {
          setIsCollapseThree('show')
        } else {
            setIsCollapseThree('')
      }         
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
                    {/* Sitemenue */}
                    <div className="col col-md-3">
                        <nav className="sidebar card py-2 mb-4">
            <ul className="nav flex-column"   id="nav_accordion" >
                <li className="nav-item">
                
                    
                    <Link href="/">
                        <a className="nav-link" onClick={handleShow}> Was kann behandelt werden?  Indikationen </a>                        
                    </Link>                        
                </li>
                             <li className="nav-item has-submenu">
                                    <a className="nav-link" href="#" onClick={toggleOne} id="sb1"> Klassische Krankengymnastik/ Manuelle Therapien  </a>
                                            <ul className={`submenu collapse ${isCollapseOne}`} style={{listStyle: 'none'}}>
                                        <li><a className="nav-link" href="#">Schmerztherapie nach Liebscher & Bracht </a></li>
                                        <li><a className="nav-link" href="#">Golgi Punkt Schmerztherapie </a></li>
                                        <li><a className="nav-link" href="#">Manuelle Therapie / Marnitz / Cyriax </a> </li>
                                        <li><a className="nav-link" href="#">Methode nach Dr. Furter </a> </li>
                                        <li><a className="nav-link" href="#">Matrix-Rhythmus-Therapie MaRhyThe </a> </li>
                                        <li><a className="nav-link" href="#">Novafon Schallwellenbehandllung </a> </li>                               
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> Massage </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> 	
                                        Pneumatische Pulsations-Massage (Pneumatron 200)
                                    </a>
                                </li>
                                <li className="nav-item has-submenu">
                                    <a className="nav-link" href="#" onClick={toggleTwo} id="sb2"> 
                                        Klassische Massage
                                    </a>
                                    <ul className={`submenu collapse ${isCollapseTwo}`} style={{listStyle: 'none'}}>
                                        <li><a className="nav-link" href="#">Bindegewebsmassage</a></li>
                                        <li><a className="nav-link" href="#">Colon-Massage / Viscerale Mobilisation</a></li>
                                        <li><a className="nav-link" href="#">Triggerpunktbehandlung</a> </li>
                                        <li><a className="nav-link" href="#">Saugwellen-Therapie</a> </li>                                                                       
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> 	
                                        Lymph-Mobilisation
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> 	
                                        Reflexzonen-Therapie
                                    </a>
                                </li>
                                <li className="nav-item has-submenu">
                                    <a className="nav-link" href="#" onClick={toggleThree} id="sb2"> 
                                        Scenar-Therapie
                                    </a>
                                    <ul className={`submenu collapse ${isCollapseThree}`} style={{listStyle: 'none'}}>
                                        <li>
                                            <a className="nav-link" href="#">
                                                Denas Therapie
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Osflow Schwingungsplatte </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Ruhe finden/ Entspannungs-Methoden </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Ruhe finden/ Stressreduktion / MFT EFT Methode </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> EMDR-Coaching </a>
                                </li>                       
                            </ul>
                        </nav>
                    </div>
                    {/* Main Content */}
                    <div className="col col-md-9">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionBehandlungen