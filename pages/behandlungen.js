import React from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { vl, heading, ColorFont } from "../scss/styles.module.scss";

// import AccordionItem from 'react-bootstrap/esm/AccordionItem'
// import AccordionBody from 'react-bootstrap/esm/AccordionBody'

// import MainBehandlung from '../components/MainBehandlung'

import dynamic from 'next/dynamic'
// import { useAmp } from 'next/amp'
// const MobileSideMenue = dynamic(() => import('../components/MobileSideMenue'))
import SideMenue from '../components/SideMenue'
import MobileSideMenue from '../components/MobileSideMenue'
import CustomAccordionToggle from '../context/CustomAccordionToggle'


// export const config = { amp: 'hybrid' }

const SectionBehandlungen = () => {
  // const isAmp = useAmp();
  
  
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
                Einführung Behandlungen
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
            {/* Sitemenue */}
            <Col md={4} className="d-none d-sm-block">
           
                <SideMenue />
              
            </Col>
            <Col
              md={1}
              className={`d-none d-sm-block ${vl}`}
              style={{ color: "black" }}
            ></Col>
            {/* Main Content */}
            <Col md={7} className={ColorFont}>
              <h2>Einführung Behandlungen</h2>
              <br />
              <p>
                Sie bekommen einen kurzen Überblick über die wichtigsten
                Behandlungsmöglichkeiten.
                <br />
                Oft bewährt sich eine Kombination einzelner Techniken.
                <br />
                Durch Ihre Rückmeldungen während und nach den Behandlungen sind
                diese ganz individuell auf Ihre aktuellen Bedürfnisse
                abgestimmt.
                <br />
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <MobileSideMenue />
    </>
  );
}

export default SectionBehandlungen