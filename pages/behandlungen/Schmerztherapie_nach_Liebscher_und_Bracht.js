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

const Schmerztherapie_nach_Liebscher_und_Bracht = () => {
  const activeKey= "0"  
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
                  Schmerztherapie nach Liebscher & Bracht
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
              <div className="d-none d-sm-block"></div>
              <Col md={4} className="d-none d-sm-block">
        
                  {/* <SideMenue /> */}
                  <Accordion flush defaultActiveKey="0">
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
          <Accordion.Item eventKey="0">
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
                    <a style={{ textDecoration: "none", color: 'rgb(48, 134, 215)' }}>
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
              ></Col>
              <Col md={7}>
                <div className={inhaltBehandlung}>
                  <h2 className="mx-auto">
                    Schmerztherapie nach Liebscher & Bracht
                  </h2>

                  <div className="lead">
                    Diese Texte sind www.liebscher-bracht.com entnommen!
                  </div>
                  <br />
                  <p>
                    JAHRELANGE erhöhte Muskelspannung (Tonus) setzen Gelenke
                    unter Kompression und führen zum Gelenkverschleiß. Die
                    verspannten, zu kurzen, verhärteten Muskeln sind URSACHE und
                    nicht die Folge von Gelenk- oder Bandscheibenverschleiß. Der
                    Muskelschmerz ist ein WARNSCHMERZ, um unseren
                    Bewegungsapparat zu schützen.
                  </p>
                  <p>
                    Wenn nur das Gelenk gespritzt wird oder Schmerzmedikamente
                    in Einsatz kommen, werden die schmerzauslösenden Faktoren
                    nicht ursächlich behandelt. Der Schmerz ist zu 90 Prozent
                    ein Muskelschmerz und ist eine positive Warnung. Er schützt
                    unseren Bewegungsapparat. Er bremst ihn vor schädigenden
                    Verhaltensweisen (z.B. zu lange einseitige Haltungen und
                    Bewegungen).
                  </p>
                  <p>
                    Die Schmerztherapie nach Liebscher & Bracht ist in drei
                    Stufen aufgebaut, die gleichzeitig drei Vorgehensweisen
                    entsprechen.
                  </p>
                  <p>
                    1. Schmerzpunktpressur an den Muskelurprüngen oder
                    Muskelansätzen. Dort sind Tastkörperchen (Rezeptoren), die
                    für die Grundspannung des Muskels verantwortlich sind. Es
                    sind weder Akupressurpunkte noch Triggerpunkte, wobei sich
                    viele überlagern. Damit kann der aktuelle Schmerz am
                    schnellsten und deutlichsten reduziert werden.
                  </p>
                  <p>
                    2. Engpassdehnungen die den gelösten Muskel umprogrammieren
                    und den verbesserten Zustand stabilisieren. Diese Dehnungen,
                    die kräftigende und koordinative Elemente enthalten führt
                    der Patient zu Hause konsequent weiter.
                  </p>
                  <p>
                    3. Maßnahmen vom Arzt oder Heilpraktiker, die unserem Körper
                    schädigende Stoffe ersparen. Unterstützt wird z.B. mit
                    Enzymen, Vitaminen, Spurenelementen, Mineralien. Die
                    Ausscheidung schädlicher und nicht gebrauchter Stoffe wird
                    gefördert. Dadurch sinkt die Gesamtkörper-Muskelanspannung
                    (Grundtonus). Die internen muskulären Widerstände werden
                    reduziert. So wird die Schmerzfreiheit unterstützt.
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

export default Schmerztherapie_nach_Liebscher_und_Bracht