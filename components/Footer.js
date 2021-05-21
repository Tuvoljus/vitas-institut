import styles from '../scss/Footer.module.scss';
import Logo from "../public/img/Logo_Vitas_Institut.svg"

import Link from 'next/link'
import Image from 'next/image'

import { GiSmartphone } from "@react-icons/all-files/gi/GiSmartphone"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"

const Footer = () => {
    return (
        <>
        <footer id="contact" className={[styles.mainFooter]}>
            <div className="container">
                    <div className="row">                        
                        <div className="col-sm-2 col-md-2 col-xl-2">
                            <Image src="/img/Logo_Vitas_Institut.svg" layout='responsive' width={50} height={50} quality="10" />
                        </div>
                
                        <div className="col-sm-5 col-md-4 col-xl-5">
                            <ul className={[styles.siteLinks]} style={{listStyle: 'none'}}>
                                <h3>Kontakt</h3>
                                <p>Bernhard Käser</p>
                                <li><GiSmartphone /> 089 - 23 23 06 70</li>
                                <li><AiOutlineMail />   bk@vitas-institut.de</li>
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
                    <div className="col-sm-5 col-md-5 col-xl-5">
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
                                <Link href="/">
                                    <a>Datenschutz</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Impressum</a>
                                        </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Sitemap</a>
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

export default Footer;