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

const NovafonSchallwellenbehandllung = () => {   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>
                <Container>
                    <Row style={{position: 'absolute', zIndex: '2'}} className="align-self-center">
                        <h1>                                
                                Novafon Schallwellenbehandlung
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
                                    Novafon Schallwellenbehandlung
                                </h2>
                                
                                <br />
                                <p>
                                    Die Novafon Schallwellengeräte liegen mit ihrer Frequenz (50 und 100 hz) zwischen Ultraschall und MaRhyThe (Matrix-Rhythmus-Therapie). Damit kann ich dem Gewebe noch ein breiteres Spektrum an wirksamen Behandlungen anbieten. Die sehr angenehmen mechanischen Vibrationen werden bis zu sechs Zentimeter tief in das Gewebe geleitet.
                                </p>
                                <p>
                                    Das regt die Durchblutung und den Stoffwechsel an, reguliert die Muskelspannung und stimuliert tiefgreifend das Gewebe. Es werden Regenerations- und Reperaturmechanismen angeregt. Die Behandllung ist aktivierend und entspannend zugleich.
                                </p>
                                <p style={{ fontWeight: '600' }} ><a href="https://www.novafon.de/">www.novafon.de</a></p>                               
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <MobileSideMenue />     
        </>
    )
}

export default NovafonSchallwellenbehandllung