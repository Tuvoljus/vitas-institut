import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { BsPlus } from "@react-icons/all-files/bs/BsPlus"
import { iconStyle } from '../../scss/Icons.module.scss'
import { Container } from 'react-bootstrap';

import { vl } from '../../scss/styles.module.scss'
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';


// export const config = { amp: 'hybrid' }

const Schmerztherapie_nach_Liebscher_und_Bracht = () => {   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                    Schmerztherapie nach Liebscher & Bracht
                                </h2>
                                
                            
                                <div className="lead">
                                    Diese Texte sind  www.liebscher-bracht.com  entnommen!                            
                                </div>
                                <br />
                                <p>
                                    JAHRELANGE  erhöhte  Muskelspannung (Tonus) setzen  Gelenke unter Kompression und  führen zum Gelenkverschleiß. Die verspannten, zu kurzen, verhärteten Muskeln sind URSACHE und nicht die Folge von Gelenk- oder Bandscheibenverschleiß. Der Muskelschmerz ist ein WARNSCHMERZ, um unseren Bewegungsapparat zu schützen.
                                </p>
                                <p>
                                    Wenn nur das Gelenk gespritzt wird oder Schmerzmedikamente in Einsatz kommen, werden die schmerzauslösenden Faktoren nicht ursächlich behandelt. Der Schmerz ist zu 90 Prozent ein Muskelschmerz und ist eine positive Warnung. Er schützt unseren Bewegungsapparat. Er bremst  ihn vor schädigenden Verhaltensweisen (z.B. zu lange einseitige Haltungen und Bewegungen).
                                </p>
                                <p>
                                    Die Schmerztherapie nach Liebscher & Bracht ist in drei Stufen aufgebaut, die gleichzeitig drei Vorgehensweisen entsprechen.
                                </p>
                                <p>
                                    1. Schmerzpunktpressur an den Muskelurprüngen oder Muskelansätzen. Dort sind Tastkörperchen (Rezeptoren), die für die Grundspannung des Muskels verantwortlich sind. Es sind weder Akupressurpunkte noch Triggerpunkte, wobei sich viele überlagern. Damit kann der aktuelle Schmerz am schnellsten und deutlichsten reduziert werden.
                                </p>
                                <p>
                                    2. Engpassdehnungen die den gelösten Muskel umprogrammieren und den verbesserten Zustand stabilisieren. Diese Dehnungen, die kräftigende und koordinative Elemente enthalten führt der Patient zu Hause konsequent weiter.
                                </p>
                                <p>
                                    3. Maßnahmen vom Arzt oder Heilpraktiker, die unserem Körper schädigende Stoffe ersparen. Unterstützt wird z.B. mit  Enzymen, Vitaminen, Spurenelementen, Mineralien. Die Ausscheidung schädlicher und nicht gebrauchter Stoffe wird gefördert. Dadurch sinkt die Gesamtkörper-Muskelanspannung (Grundtonus). Die internen muskulären Widerstände werden reduziert. So wird die Schmerzfreiheit unterstützt.
                                </p>
                            
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <MobileSideMenue />     
        </>
    )
}

export default Schmerztherapie_nach_Liebscher_und_Bracht