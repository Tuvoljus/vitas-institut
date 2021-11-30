import React from 'react'
import Image from 'next/image'
import Container  from "react-bootstrap/Container"
import Row  from "react-bootstrap/Row"
import Col  from "react-bootstrap/Col"

import { vl, heading, inhaltBehandlung} from '../scss/styles.module.scss'
import { Accordion } from 'react-bootstrap'


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
                        
                    </Col>
                    <Col md={1} className={`d-none d-sm-block ${vl}`} style={{ color: "black" }}>
    
                    </Col>
                    <Col md={7} >
    
                    </Col>  
                </Row>
            </Container>
        </section>
    </>
    )
}

export default AktuellesUndLinks