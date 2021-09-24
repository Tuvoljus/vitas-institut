import React from 'react'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Container } from 'react-bootstrap';

import { vl } from '../../scss/styles.module.scss'
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';


// export const config = { amp: 'hybrid' }

const Manuelle_Therapie_Marnitz_Cyriax = () => {   
    
    return (
        <>
            <div>
                <Container>
                    <Row style={{position: 'absolute', zIndex: '2'}} className="align-self-center">
                        <h1>                                
                                Einführung Behandlungen
                        </h1>
                    </Row>
                </Container>
                <Image src="/img/Header_Bild_Rot.jpg" layout='responsive'  objectFit="cover" width={1920} height={420} quality="10"/>
            </div>
            <section className="d-none d-sm-block">
                <Container >
                    <Row>
                    {/* Sitemenue */}
                        <Col md={4}>
                            <SideMenue />
                        </Col>
                        {/* Main Content */}
                        <Col md={1} className={vl} style={{color: 'black', }}>
                            
                        </Col>
                        <Col md={7}>
                            <div style={{ paddingLeft: '3rem',  color: '#707070' }}>
                                <h2 className="mx-auto">
                                    Manuelle Therapie / Marnitz / Cyriax
                                </h2>
                                
                                <br />
                                <p>
                                    Alle manuellen Therapien sind gezielte, gelenkschonende Behandlungen. Sie werden bei Funktionsstörungen aller Gelenke (auch Wirbelgelenke) angewendet. Die Auswahl der jeweiligen Mobilisationstechniken wird bestimmt durch den Befund. Eingeschränkte Bewegungsrichtungen, die Form des Gelenks, spielen eine Rolle. Welche Strukturen sind besonders betroffen? (Muskulatur, Faszie, Sehne, Kapsel, Periost, Knochen).
                                </p>

                                <p style={{ fontWeight: '600' }} ><a href="https://www.somatics.de">www.somatics.de</a></p>
                                <p style={{fontWeight: '600'}} ><a href="https://www.marnitz-therapie.de">www.marnitz-therapie.de</a></p>
                            
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <MobileSideMenue />     
        </>
    )
}

export default Manuelle_Therapie_Marnitz_Cyriax