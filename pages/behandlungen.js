import React from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { vl } from "../scss/styles.module.scss";

import { ColorFont } from '../scss/styles.module.scss'

import { Navbar } from 'react-bootstrap'
// import AccordionItem from 'react-bootstrap/esm/AccordionItem'
// import AccordionBody from 'react-bootstrap/esm/AccordionBody'

// import {M2} from '../components/submenue/M2'

// import SubMenue from '../components/SubMenue'
// import MainBehandlung from '../components/MainBehandlung'

import dynamic from 'next/dynamic'
// import { useAmp } from 'next/amp'
// const MobileSideMenue = dynamic(() => import('../components/MobileSideMenue'))
import SideMenue from '../components/SideMenue'
import MobileSideMenue from '../components/MobileSideMenue' 


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
                className="d-flex align-items-center"
              >
                Einführung Behandlungen
              </h1>
            </Col>
          </Row>
        </Container>
        <Image
          fluid
          src="/img/Header_Bild_Rot.jpg"
          layout="fill"
          objectFit="cover"
          width={1936}
          height={720}
          quality="10"
          style={{ position: "relative" }}
        />
      </section>
      <section className="d-none d-sm-block">
        <Container>
          <Row>
            {/* Sitemenue */}
            <Col md={4}>
              <SideMenue />
            </Col>
            <Col
              md={1}
              className={vl}
              style={{ color: "black" }}
              className="d-none d-sm-block"
            ></Col>
            {/* Main Content */}
            <Col md={8} className={ColorFont}>
              <h2>Einführung Behandlungen</h2>
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