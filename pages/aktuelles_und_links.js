import React from 'react'
import Image from 'next/image'
import Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

import { vl, heading, ColorFont, inhaltBehandlung} from '../scss/styles.module.scss'
import { Accordion } from 'react-bootstrap'
import Aktuelles from '../components/Aktuelles'


const AktuellesUndLinks = () => {
    return (
    <>
        <section>
            <Container>
                <Row>
                    <Col className="d-flex align-items-center justify-content-center">
                        <h1
                            style={{ position: "absolute", zIndex: "2" }}
                            className={`d-flex align-items-center ${heading}`}
                        >
                            Aktuelles und Links
                        </h1>
                    </Col>
                </Row>
            </Container>
            <Image
                src="/img/Header_Bild_Rot.jpg"
                layout="fill"
                objectFit="cover"            
                quality="100"
            />
        </section>
        <section>
            <Container>
                <Row>
                    <Col md={4} className="d-none d-sm-block">
                        <h2 className={ColorFont}>Aktuelles</h2>
                    </Col>
                    <Col md={1} className={`d-none d-sm-block ${vl}`} style={{ color: "black" }}>
    
                    </Col>
                    <Col md={7} >
                        {/* <Aktuelles /> */}
                        <span style={{fontWeight: '700'}}>Liebe Seitenbesucher,</span>
                        <br /><br />
                        seit Januar 2022 freue mich auf nach einem Re-Design meiner 10 Jahre alten Internetseite auf meine neue Interneseite Vitas Institut.
                        <br />
                        <br />
                        Herzlichst,<br />
                        Bernhard K&auml;ser
                    </Col>  
                </Row>
            </Container>
        </section>
    </>
    )
}

export default AktuellesUndLinks