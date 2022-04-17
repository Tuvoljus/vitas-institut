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

import dynamic from 'next/dynamic'
import Head from 'next/head'
const HeaderPicture = dynamic(() => import('../../components/HeaderPicture'))


// export const config = { amp: 'hybrid' }

const Methode_Dr_Furter = () => {   
    
    return (
      <>
      <Head>
      <title>Physiopraxis - Methode Dr. Furter</title>
        </Head>        
        <HeaderPicture text="Methode nach Dr. Furter" />
        <section>
          <Container>
            <Row>
              {/* Sitemenue */}
              <Col md={4} className="d-none d-sm-block">                            
                {/* <SideMenue /> */}
                <Accordion flush>
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
                href="/behandlungen/was-kann-alles-behandelt-werden"
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
                    href="/behandlungen/Schmerztherapie-nach-Liebscher-und-Bracht"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
                      Schmerztherapie nach Liebscher %26 Bracht
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/behandlungen/Golgi-Punkt-Schmerztherapie"
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
                    href="/behandlungen/Manuelle-Therapie-Marnitz-Cyriax"
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
                    href="/behandlungen/Methode-Dr-Furter"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none", color: 'rgb(48, 134, 215)' }}>
                      Methode nach Dr. Furter{" "}
                    </a>
                  </Link>
                </li>

                {/* <li>
                  <Link
                    href="/behandlungen/Matrix-Rhythmus-Therapie-MaRhyThe"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
                      Matrix-Rhythmus-Therapie MaRhyThe
                    </a>
                  </Link>
                </li> */}

                <li>
                  <Link
                    href="/behandlungen/Novafon-Schallwellenbehandllung"
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
                href="/behandlungen/Pneumatische-Pulsations-Massage"
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
                    href="/behandlungen/Colonmassage-Viscerale-Mobilisation"
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
                    href="/behandlungen/Saugwellen-Therapie"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
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
                href="/behandlungen/Atemtherapie-der-befreite-Atem"
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
                href="/behandlungen/Lymph_Mobilisation-Lymphdrainage"
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
                href="/behandlungen/Reflexzonen-Therapie"
                replace
                scroll={false}
              >
                <a style={{ textDecoration: "none" }}>Reflexzonen-Therapie</a>
              </Link>
            </Card.Header>
          </Card>
          {/* <Accordion.Item eventKey="2">
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
                    href="/behandlungen/Scenar-Therapie"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>Denas Therapie</a>
                  </Link>
                </li>
              </div>
            </Accordion.Body>
          </Accordion.Item> */}
          <Card>
            <Card.Header>
              <Link
                href="/behandlungen/Osflow-Schwingungsplatte"
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
                href="/behandlungen/Stressreduktion-EFT"
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
                  <h2 className="mx-auto">
                    IUC ( Interactiv unity concept) <br /> Methode nach Dr.
                    Furter
                  </h2>

                  <br />
                  <p>
                    Diese rein manuelle Therapie wirkt ein auf Muskel,
                    Bindegewebe oder Nerv. Ich behandle exakt die Stellen, die
                    Sie als Sitz Ihrer Beschwerden angeben (nicht nur die
                    Schmerzstellen). Auch Bereiche, die sich nach Ihren Angaben
                    z.B. &#8222;voll&#8220;, &#8222;leer&#8220;,
                    &#8222;müde&#8220; anfühlen. Auch wenn kein klinischer
                    Hinweis auf eine Organveränderung vorliegt, wird behandelt.
                  </p>
                  <p>
                    Die Methode verursacht einen gewissen Schmerz, den jedoch
                    alle Patienten als &#8222;heilsam&#8220; beurteilen. Achtzig
                    Prozent aller Krankheitsbilder des Bewegungsapparates können
                    mit IUC behandelt werden, darüber hinaus auch viele
                    internistische und psychische Beschwerden (siehe
                    Indikationsliste).
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    <a href="https://www.drfurter.ch/de/methode-de.html">
                      www.drfurter.ch/de/
                    </a>
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

export default Methode_Dr_Furter