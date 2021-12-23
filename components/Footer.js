import React from 'react'

import styles from '../scss/Footer.module.scss'

import Link from 'next/link'
import Image from 'next/image'

import { GiSmartphone } from "@react-icons/all-files/gi/GiSmartphone"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"

const Footer = () => {
    return (
        <>
        <footer id="contact" className={[styles.mainFooter]}>
            <div className="container">
                    <div className="row ">                        
                        <div className="col-xs-1 col-sm-1 col-md-4 col-xl-2" style={{marginTop: '-2rem'}}>
                            <Image src="/img/Logo_Vitas_Institut_weiß.svg" layout='responsive' width={50} height={50} quality="10" />
                        </div>
                
                        <div className="col-sm-4 col-sm-4 col-md-4 col-xl-4 align-self-center">
                            <ul className={[styles.siteLinks]} style={{listStyle: 'none'}}>
                                <h3 style={{color: '#f2f2f2'}}>Kontakt</h3>
                                <p style={{color: '#969696'}}>Bernhard Käser</p>
                                <li ><GiSmartphone color="#969696" size="1.3rem"/> <a href="tel:089 - 23 23 06 70">089 - 23 23 06 70</a></li>
                                <li><AiOutlineMail color="#969696" size="1.3rem"/> <a href="mailTo:bk@vitas-institut.de"> bk@vitas-institut.de</a></li>
                            </ul>
                            
                        <ul className={[styles.siteLinks]} style={{listStyle: 'none'}}>
                            <li>
                                <Link href="">
                                    <a>
                                          
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a></a>
                                </Link>
                            </li>
                       </ul>     
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-2 col-xl-2">
                        <ul className={[styles.siteLinks]} style={{listStyle: 'none'}}>
                            <li>
                                <Link href="">
                                    <a>
                                        Glossar                                             
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Buchempfehlungen</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/datenschutz">
                                    <a>Datenschutz</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Impressum</a>
                                        </Link>
                            </li>                     
                        </ul>     
                    </div>
                </div>
            </div>
            <div className={[styles.copyrights]}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-0">Copyright &copy; {new Date().getFullYear()}</p>
                        </div>
                        <div className="col-md-6 text-right">
                                
                        </div>
                    </div>
                </div>
            </div>   
        </footer>        
    </>        
    )
}

export default Footer