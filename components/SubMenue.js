import React, { useState } from 'react'
import Link from 'next/link'



export const config = { amp: 'hybrid' }

const SubMenue = () => {
    const [isCollapseOne, setIsCollapseOne] = useState('');
    const [isCollapseTwo, setIsCollapseTwo] = useState('');
    const [isCollapseThree, setIsCollapseThree] = useState('');
    
    // const [showSublink, setShowSublink] = useState('');

    // const showCollapse1 = () => {
    //     if (showSublink != 'show'){
    //     setShowSublink('show')
    // }else {
    //     setShowSublink('');
    // }
    // };
    
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
        <nav className="sidebar card py-2 mb-4">
            <ul className="nav flex-column" id="nav_accordion">
                <li className="nav-item">
                    <a className="nav-link" href="#"> Was kann behandelt werden?  Indikationen </a>
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

    )
}

export default SubMenue