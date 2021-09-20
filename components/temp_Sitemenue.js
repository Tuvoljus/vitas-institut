<nav className={`sidebar py-2 mb-4 ${sideMenue}`} >
                                <ul className={`nav flex-column`} >
                                    <li className="nav-item">                   
                                        <Link href="behandlungen/was_kann_alles_behandelt_werden">
                                            <a className="nav-link"> Einführung Behandlungen </a>                        
                                        </Link>                        
                                    </li>
                                    <li className="nav-item">                   
                                        <Link href="behandlungen/was_kann_alles_behandelt_werden">
                                            <a className="nav-link"> Was kann behandelt werden?  Indikationen </a>                        
                                        </Link>                        
                                    </li>
                                    
                                    <li className="nav-item has-submenu">
                                        <a className="nav-link" href="#" onClick={toggleOne} id="sb1">
                                            Klassische Krankengymnastik/ Manuelle Therapien
                                        </a>
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
                                        <a className="nav-link" href="#">
                                            Osflow Schwingungsplatte 
                                        </a>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Ruhe finden/ Entspannungs-Methoden </a>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Ruhe finden/ Stressreduktion / MFT EFT Methode 
                                        </a>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"> 
                                            EMDR-Coaching 
                                        </a>
                                    </li>                       
                                </ul>
                            </nav>