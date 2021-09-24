import React from 'react'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Container } from 'react-bootstrap';

import { vl } from '../../scss/styles.module.scss'
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';


// export const config = { amp: 'hybrid' }

const Methode_Dr_Furter = () => {   
    
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
                                    IUC ( Interactiv unity concept) <br/> Methode nach Dr. Furter
                                </h2>
                                
                                <br />
                                <p>
                                    Diese rein manuelle Therapie wirkt ein auf Muskel, Bindegewebe oder Nerv. Ich behandle exakt die Stellen, die Sie als Sitz Ihrer Beschwerden angeben (nicht nur die Schmerzstellen). Auch Bereiche, die sich nach Ihren Angaben z.B. „voll", „leer", „müde" anfühlen. Auch wenn kein klinischer Hinweis auf eine Organveränderung vorliegt, wird behandelt.
                                </p>
                                <p>
                                    Die Methode verursacht einen gewissen Schmerz, den jedoch alle Patienten als „heilsam" beurteilen. Achtzig Prozent aller Krankheitsbilder des Bewegungsapparates können mit IUC behandelt werden, darüber hinaus auch viele internistische und psychische Beschwerden (siehe Indikationsliste).
                                </p>
                                <p style={{ fontWeight: '600' }} ><a href="https://www.drfurter.ch/de/methode-de.html">www.drfurter.ch/de/</a></p>                               
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <MobileSideMenue />     
        </>
    )
}

export default Methode_Dr_Furter