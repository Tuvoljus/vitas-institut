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

const Matrix_Rhythmus_Therapie_MaRhyThe = () => {   
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
                                    Matrix-Rhythmus-Therapie MaRhyThe
                                </h2>
                                
                                <br />
                                <p>
                                    Die Matrix-Rhythmus-Therapie ist nach langjähriger Grundlagenforschung über die Zellen an der Uni Erlangen entwickelt worden.
                                </p>
                                <p>
                                    Mit einem speziell geformten schwingenden  Behandlungskopf wird in der muskeleigenen Frequenz  8-12 Hertz gearbeitet. (entspricht der Zittergeschwindigkeit wenn Sie Schüttelfrost haben) Es werden mechano-magnetische Schwingungen erzeugt. Diese regen den Stoffwechsel zwischen Zelle und Umgebungsflüssigkeit (Matrix) an.
                                </p>
                                <p>
                                    Die gute Wirksamkeit ist durch mehrere Studien bestätigt worden. (u.a. Merzedes Benz/ Faber Castell)
                                </p>
                                <p style={{ fontWeight: '600' }} ><a href="https://www.marhythe.de/">www.marhythe.de</a></p>                                 
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <MobileSideMenue />     
        </>
    )
}

export default Matrix_Rhythmus_Therapie_MaRhyThe