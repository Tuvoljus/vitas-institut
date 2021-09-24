import React from 'react'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Container } from 'react-bootstrap';

import { vl } from '../../scss/styles.module.scss'
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';


// export const config = { amp: 'hybrid' }

const Colonmassage_Viscerale_Mobilisation = () => {   

    return (
        <>
            <div>
                <Container>
                    <Row style={{position: 'absolute', zIndex: '2'}} className="align-self-center">
                        <h1>                                
                                Colonmassage / Viscerale Mobilisation
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
                                    Colonmassage / Viscerale Mobilisation
                                </h2>
                                
                                <br />
                                <div className="lead">
                                Colonmassage / Visceralen Mobilisation (Viscera = Eingeweide)
                                </div>
                                <p>
                                    Es ist eine sehr gezielte Bauchbehandlung. Im langsamen Rhythmus wird die Darmperistaltik angeregt. Die Funktionsverbesserung aller inneren Organe sowie Schmerzlinderung sind das Ziel der Behandlung.
                                </p>
                                <p>
                                    Auch viele orthopädischen und neurologischen Beschwerden hängen oft mit einer „blockierten" Organtätigkeit zusammen. Ein geschmeidiger Muskel oder ein bewegliches Gelenk ist die Voraussetzung für Geschicklichkeit, Ausdauer, Kraft.
                                </p>
                                <p>
                                „Geschmeidige", frei gegeneinander bewegliche Organe sind Voraussetzung für gute Entgiftung.   Dadurch optimale Sauerstoff- und Nahrungsverwertung. Das innere Organ muß zunächst keine offensichtlichen Beschwerden machen. (Ultraschall, MRT, Laborwerte sind ok) Ein harter Muskel oder ein etwas starres Gelenk können auch lange beschwerde-frei sein.
                                </p>
                                <p>
                                Wir haben einen großzügigen Organismus. Er funktioniert auch noch mit starker Verhärtung, "Vergiftung". Ein riesen Geschenk. Aber wir dürfen diese Fähigkeit nicht zu sehr strapazieren.
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

export default Colonmassage_Viscerale_Mobilisation