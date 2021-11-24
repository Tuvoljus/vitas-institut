import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container  from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { vl, heading, inhaltBehandlung } from "../../scss/styles.module.scss";
// import SideMenue from "../../components/SideMenue";
import MobileSideMenue from "../../components/MobileSideMenue";

// export const config = { amp: 'hybrid' }

const Atemtherapie_der_befreite_Atem = () => {

  return (
    <>
      <section>
        <Container>
        <Col className="d-flex align-items-center justify-content-center">
                <h1
                  style={{ position: "absolute", zIndex: "2" }}
                  className={`d-flex align-items-center ${heading}`}>                
                    Atemtherapie 
                </h1>
              </Col>
        </Container>
        <Image
          src="/img/Header_Bild_Rot.jpg"
          layout="fill"
          objectFit="cover"
          // width={1920}
          // height={420}
          quality="100"
        />
      </section>
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
            Klassische Massage
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
            >
            </Col>
            <Col md={7}>
              <div className={inhaltBehandlung}>
                <h2 className="mx-auto">Atemtherapie</h2>
                <div className="lead">der befreite Atem</div>
                <br />
                <p>
                  <b>
                    Unser Atem reagiert auf ALLES, was uns innerlich und
                    äußerlich bewegt.
                  </b>{" "}
                  <br />
                  Dies drücken wir auch in der Sprache aus: Atemlos,
                  atemberaubend, langer Atem, Verschnaufpause, dicke Luft,
                  runterpressen, mühsam rauspressen, tiefe Seufzer der
                  Erleichterung.
                </p>
                <p>
                  Dr. Buteyko und Prof. Frolov haben die Atemtechnik
                  revolutioniert und damit für viele andere Erkrankungen neben
                  Asthma einen Meilenstein in der Medizin gesetzt.
                </p>
                <p>
                  Konsequente Nasenatmung und langsame und ganz geringe Atemzüge
                  mit kaum wahrnehmbarer Bewegung im Bauch ist der ideale
                  Ruheatem.
                </p>
                <p style={{ fontWeight: "600" }}>
                  <a href="http://www.atmosana-schule.de/">
                    www.atmosana-schule.de/
                  </a>
                </p>
                <p>
                  Mit den Techniken der <b>klassischen Atemtherapie</b>{" "}
                  (Dehnlagen, Drainagelagerung, Hustentechniken, Lippenbremse,
                  atemerleichternde Stellungen, Atem-Massage) werden
                  Atemerkrankungen wie z.B. Bronchitis, Asthma, behandelt.
                </p>
                <p>
                  Beim <b> &quot;befreiten Atem&quot;</b> geht es um eine
                  bessere Körperwahrnehmung, tiefe körperliche und psychische
                  Entspannung. Meine Hände sind mit Ihrem Körper im
                  &bdquo;Gespräch&rdquo;. Durch die Berührung können
                  Muskel-verspannungen, Atem und Emotionen gelöst werden. Auf
                  diese Weise ist ein tieferer Zugang zu sich selbst möglich.
                </p>
                <p>
                  Viele Emotionen sind in unserem &bdquo;Muskelpanzer&rdquo;
                  eingefroren. Gelegentliche tiefe Seufzer der Erleichterung
                  oder auch ein paar unwillkürliche Tränen lockern diesen
                  &bdquo;Panzer&rdquo;. Seelische Schmerzen, Ängste und Trauer,
                  das große Thema der mangelnden Eigenliebe, drücken sich in
                  Körperhaltung, Atem- und Bewegungsmustern aus.
                </p>
                <p>
                  Durch die aufmerksame Beobachtung und die achtsame Berührung,
                  die immer im engen Kontakt mit dem vielschichtigen
                  Atemgeschehen einhergeht, dürfen Körper und Seele genesen.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <MobileSideMenue />
    </>
  );
};

export default Atemtherapie_der_befreite_Atem
