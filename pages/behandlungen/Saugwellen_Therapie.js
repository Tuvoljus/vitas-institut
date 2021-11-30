import React from 'react'
import Image from 'next/image'
import Link from "next/link"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container  from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { vl, heading, inhaltBehandlung } from '../../scss/styles.module.scss'
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';


// export const config = { amp: 'hybrid' }

const Saugwellen_Therapie = () => {   

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
                    Saugwellen-Therapie
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
                {/* <SideMenue /> */}
                <Accordion flush defaultActiveKey="1">
          <Card>
            <Card.Header>
              <Link href="/behandlungen" replace scroll={false}>
                <a style={{ textDecoration: "none" }}>
                  Einführung Behandlungen
                </a>
              </Link>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <Link
                href="/behandlungen/was_kann_alles_behandelt_werden"
                replace
                scroll={false}
              >
                <a style={{ textDecoration: "none" }}>
                  Was kann behandelt werden? - Indikationen
                </a>
              </Link>
            </Card.Header>
          </Card>
          <Accordion.Item>
            <Accordion.Header>
              Klassische Krankengymnastik/ <br /> Manuelle Therapien
            </Accordion.Header>
            <Accordion.Body>
              <div
                style={{
                  lineHeight: "3rem",
                  paddingLeft: "1rem",
                  listStyle: "none",
                }}
              >
                <li>
                  <Link
                    href="/behandlungen/Schmerztherapie_nach_Liebscher_und_Bracht"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
                      Schmerztherapie nach Liebscher & Bracht
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/behandlungen/Golgi_Punkt_Schmerztherapie"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
                      Golgi Punkt Schmerztherapie
                    </a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/behandlungen/Manuelle_Therapie_Marnitz_Cyriax"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
                      Manuelle Therapie / Marnitz / Cyriax
                    </a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/behandlungen/Methode_Dr_Furter"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
                      Methode nach Dr. Furter{" "}
                    </a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/behandlungen/Matrix-Rhythmus-Therapie-MaRhyThe"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
                      Matrix-Rhythmus-Therapie MaRhyThe
                    </a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/behandlungen/Novafon_Schallwellenbehandllung"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
                      Novafon Schallwellenbehandllung
                    </a>
                  </Link>
                </li>
              </div>
            </Accordion.Body>            
            </Accordion.Item>
          <Card>
            <Card.Header>
              <Link href="/behandlungen/Massage" replace scroll={false}>
                <a style={{ textDecoration: "none" }}>Massage</a>
              </Link>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <Link
                href="/behandlungen/Pneumatische_Pulsations-Massage"
                replace
                scroll={false}
              >
                <a style={{ textDecoration: "none" }}>
                  Pneumatische Pulsations-Massage (Pneumatron 200)
                </a>
              </Link>
            </Card.Header>
          </Card>
          <Accordion.Item eventKey="1"
          >
            <Accordion.Header>
            Klassische Massage</Accordion.Header>
            <Accordion.Body>
              <div
                style={{
                  lineHeight: "3rem",
                  paddingLeft: "1rem",
                  listStyle: "none",
                }}
              >
                <li>
                  <Link
                    href="/behandlungen/Bindegewebsmassage"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>Bindegewebsmassage</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/behandlungen/Colonmassage_Viscerale_Mobilisation"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
                      Colon-Massage / Viscerale Mobilisation
                    </a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/behandlungen/Triggerpunktbehandlung"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
                      Triggerpunktbehandlung
                    </a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/behandlungen/Saugwellen_Therapie"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none", color: 'rgb(48, 134, 215)' }}>
                      Saugwellen-Therapie
                    </a>
                  </Link>
                </li>
              </div>
            </Accordion.Body>
            </Accordion.Item>
          <Card>
            <Card.Header>
              <Link
                href="/behandlungen/Atemtherapie_der_befreite_Atem"
                replace
                scroll={false}
              >
                <a style={{ textDecoration: "none" }}>
                  Atemtherapie; der befreite Atem
                </a>
              </Link>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <Link
                href="/behandlungen/Lymph_Mobilisation_Lymphdrainage"
                replace
                scroll={false}
              >
                <a style={{ textDecoration: "none" }}>Lymph-Mobilisation</a>
              </Link>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <Link
                href="/behandlungen/Reflexzonen_Therapie"
                replace
                scroll={false}
              >
                <a style={{ textDecoration: "none" }}>Reflexzonen-Therapie</a>
              </Link>
            </Card.Header>
          </Card>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Scenar-Therapie</Accordion.Header>
            <Accordion.Body>
              <div
                style={{
                  lineHeight: "3rem",
                  paddingLeft: "1rem",
                  listStyle: "none",
                }}
              >
                <li>
                  <Link
                    href="/behandlungen/Scenar_Therapie"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>Denas Therapie</a>
                  </Link>
                </li>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Card>
            <Card.Header>
              <Link
                href="/behandlungen/Osflow_Schwingungsplatte"
                replace
                scroll={false}
              >
                <a style={{ textDecoration: "none" }}>
                  Osflow Schwingungsplatte
                </a>
              </Link>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <Link
                href="/behandlungen/Entspannungs-Methoden"
                replace
                scroll={false}
              >
                <a style={{ textDecoration: "none" }}>
                  Ruhe finden/ Entspannungs-Methoden
                </a>
              </Link>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <Link
                href="/behandlungen/Stressreduktion_EFT"
                replace
                scroll={false}
              >
                <a style={{ textDecoration: "none" }}>
                  Ruhe finden/ Stressreduktion / MFT EFT Methode
                </a>
              </Link>
            </Card.Header>
          </Card>
          <Card>
            <Card.Header>
              <Link href="/behandlungen/EMDR-Coaching" replace scroll={false}>
                <a style={{ textDecoration: "none" }}>EMDR-Coaching</a>
              </Link>
            </Card.Header>
          </Card>
        </Accordion>
              </Col>
                        {/* Main Content */}
                        <Col
                            md={1}
                            className={`d-none d-sm-block ${vl}`}
                            style={{ color: "black" }}                
                        >
                        </Col>
              <Col md={7}>
                <div className={inhaltBehandlung}>
                  <h2 className="mx-auto">Saugwellen-Therapie</h2>

                  <br />
                  <p>
                    Die Saugwellen-Behandlung ist ein Verbindung von Schröpfen
                    und Massage. Durch das Vakuumgerät wird eine dauerne
                    Sogwirkung ausgeübt. Die Stärke kann genau dosiert werden.
                    Das Schröpfglas kann so auf der Haut bewegt werden.
                  </p>
                  <p>
                    In der Indikationsliste finden sie viele Möglichkeiten für
                    die unterstützende Wirkung der Saugwellen-Behandlung.
                  </p>
                  <p>Hervorzuheben ist die Narbenmobilisation.</p>
                  <p style={{ fontWeight: "600" }}>
                    <a href="https://www.pneumatron.de/">www.pneumatron.de/</a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <MobileSideMenue />
      </>
    );
}

export default Saugwellen_Therapie