import React from 'react'
import Image from 'next/image'
import Link from "next/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container  from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { vl, heading, inhaltBehandlung } from '../../scss/styles.module.scss'
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';


// export const config = { amp: 'hybrid' }

const Colonmassage_Viscerale_Mobilisation = () => {   

    return (
      <>
        <section>
          <Container>
            <Row
              className="d-flex align-items-center justify-content-center"
            >
              <h1
              style={{ position: "absolute", zIndex: "2" }}
              className={`d-flex align-items-center ${heading}`}>Colonmassage / Viscerale Mobilisation</h1>
            </Row>
          </Container>
          <Image
            src="/img/Header_Bild_Rot.jpg"
            layout="fill"
            objectFit="cover"
            width={1920}
            height={420}
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
                    <a style={{ textDecoration: "none", color: 'rgb(48, 134, 215)' }}>
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
              >
              </Col>
              <Col md={7}>
                <div className={inhaltBehandlung}>
                  <h2 className="mx-auto">
                    Colonmassage / Viscerale Mobilisation
                  </h2>

                  <br />
                  <div className="lead">
                    Colonmassage / Visceralen Mobilisation (Viscera =
                    Eingeweide)
                  </div>
                  <p>
                    Es ist eine sehr gezielte Bauchbehandlung. Im langsamen
                    Rhythmus wird die Darmperistaltik angeregt. Die
                    Funktionsverbesserung aller inneren Organe sowie
                    Schmerzlinderung sind das Ziel der Behandlung.
                  </p>
                  <p>
                    Auch viele orthopädischen und neurologischen Beschwerden
                    hängen oft mit einer &#8222;blockierten&#8220;
                    Organtätigkeit zusammen. Ein geschmeidiger Muskel oder ein
                    bewegliches Gelenk ist die Voraussetzung für
                    Geschicklichkeit, Ausdauer, Kraft.
                  </p>
                  <p>
                    &#8222;Geschmeidige&#8220;, frei gegeneinander bewegliche
                    Organe sind Voraussetzung für gute Entgiftung. Dadurch
                    optimale Sauerstoff- und Nahrungsverwertung. Das innere
                    Organ muß zunächst keine offensichtlichen Beschwerden
                    machen. (Ultraschall, MRT, Laborwerte sind ok) Ein harter
                    Muskel oder ein etwas starres Gelenk können auch lange
                    beschwerde-frei sein.
                  </p>
                  <p>
                    Wir haben einen großzügigen Organismus. Er funktioniert auch
                    noch mit starker Verhärtung, &ldquo;Vergiftung&ldquo;. Ein
                    riesen Geschenk. Aber wir dürfen diese Fähigkeit nicht zu
                    sehr strapazieren.
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

export default Colonmassage_Viscerale_Mobilisation