import React, { useState, useEffect } from 'react'
import Link from 'next/link'



// export const config = { amp: 'hybrid' }

const was_kann_behandelt_werden = () => {
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
                            
                        </div>
                        <div className="col col-md-4 align-self-center">
                            <h1>Was kann behandelt werden? - Indikationen</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="jumbotron" style={{paddingTop: '3rem', backgroundColor:'rgba(225,225,225, .5)'}}>
            <div className="container" >
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
                    <div className="col col-md-9" style={{backgroundColor: 'white', padding: '3rem', border: '1px solid rgba(0, 0, 0, 0.125)', borderRadius: '.7rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'}}>
                        <h4>Behandlung folgender Beschwerden</h4>
                        <h5> Der Bereich von Gelenken, Muskulatur, Bindegewebe</h5>
                        <ul>
                            <li>
                                Arthrose 
                            </li>
                            <li>
                                Karpaltunnelsyndrom
                            </li>
                            <li>
                                Schmerzen der Wirbelsäule
                            </li>
                            <li>
                                Chronische Schmerzen
                            </li>
                            <li>
                                Chronische Ischialgie 
                            </li>
                            <li>
                                Kopfschmerzen; Migräne 
                            </li>
                            <li>
                                Chronische Sinusitis 
                            </li>
                            <li>
                                nach Herzinfarkt 
                            </li>
                            <li>
                                einige Arten von Asthma bronchiale
                            </li>
                            <li>
                                 chronische Bronchitis
                            </li>
                            <li>
                                Gastritis, Kolitis
                            </li>
                            <li>
                                Menstruationsbeschwerden
                            </li>
                            <li>
                                Ovarialzysten
                            </li>
                            <li>
                                 Chronische Blasenentzündung
                            </li>
                            <li>
                                Prostatabeschwerden
                            </li>
                            <li>
                               Schlecht heilende Brüche
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default was_kann_behandelt_werden