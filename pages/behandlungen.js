import React from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ColorFont } from '../scss/styles.module.scss'

import { Navbar } from 'react-bootstrap'
// import AccordionItem from 'react-bootstrap/esm/AccordionItem'
// import AccordionBody from 'react-bootstrap/esm/AccordionBody'


// import { useAmp } from 'next/amp'
// import {M2} from '../components/submenue/M2'

// import SubMenue from '../components/SubMenue'
// import MainBehandlung from '../components/MainBehandlung'

import dynamic from 'next/dynamic'
import { useAmp } from 'next/amp'

const MobileSideMenue = dynamic(() => import('../components/MobileSideMenue'))
import SideMenue from '../components/SideMenue'


export const config = { amp: 'hybrid' }

const SectionBehandlungen = () => {
    const isAmp = useAmp();
    return (
      <>
        <div>
          <Container>
            <Row>
              <Col className="d-flex">
                <h1
                  style={{ position: "absolute", zIndex: "2" }}
                  className="d-flex align-items-center"
                >
                  Einführung Behandlungen
                </h1>
              </Col>
            </Row>
          </Container>
          {isAmp ? (
            <amp-img
              layout="responsive"
              width="1920"
              height="420"
              src="/img_webp/Header_Bild_Rot.webp"
              alt="HeaderImage Bernhard Käser"              
            />
          ) : (
            <Image
              src="/img/Header_Bild_Rot.jpg"
              layout="responsive"
              objectFit="cover"
              width={1920}
              height={420}
              quality="10"
              style={{ position: "relative" }}
            />
          )}
        </div>

        <section className="d-none d-sm-block">
          <Container>
            <Row>
              {/* Sitemenue */}
              <Col md={4}>
                <SideMenue />
              </Col>
              {/* Main Content */}
              <Col md={8} className={ColorFont}>
                <h2>Einführung Behandlungen</h2>
                <p>
                  Sie bekommen einen kurzen Überblick über die wichtigsten
                  Behandlungsmöglichkeiten.
                  <br />
                  Oft bewährt sich eine Kombination einzelner Techniken.
                  <br />
                  Durch Ihre Rückmeldungen während und nach den Behandlungen
                  sind diese ganz individuell auf Ihre aktuellen Bedürfnisse
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