import React from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const SideMenue = (props) => {
    return (
      <>
        <Accordion flush>
          <Card>
            <Card.Header>
              <Link
                href="/behandlungen"
                replace
                scroll={false}
              >
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
                      Golgi Punkt Schmerztherapie{" "}
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
                      Manuelle Therapie / Marnitz / Cyriax{" "}
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
          <Accordion.Item eventKey="1">
            <Link
              href="/behandlungen/Klassische_Massage"
              replace
              scroll={false}
            >
              <a style={{ textDecoration: "none" }}>
                <Accordion.Header>Klassische Massage</Accordion.Header>
              </a>
            </Link>
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
                    href="/behandlungen/was_kann_alles_behandelt_werden"
                    replace
                    scroll={false}
                  >
                    <a style={{ textDecoration: "none" }}>
                      Bindegewebsmassage
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/behandlungen/was_kann_alles_behandelt_werden"
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
                    href="/behandlungen/was_kann_alles_behandelt_werden"
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
                    href="/behandlungen/was_kann_alles_behandelt_werden"
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
                href="/behandlungen/was_kann_alles_behandelt_werden"
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
                href="/behandlungen/was_kann_alles_behandelt_werden"
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
                href="/behandlungen/was_kann_alles_behandelt_werden"
                replace
                scroll={false}
              >
                <a style={{ textDecoration: "none" }}>
                  Reflexzonen-Therapie
                </a>
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
                    href="/behandlungen/was_kann_alles_behandelt_werden"
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
              <Link href="/behandlungen/was_kann_alles_behandelt_werden">
                <a
                  style={{ textDecoration: "none" }}
                  replace
                  scroll={false}
                >
                  Osflow Schwingungsplatte
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
                  Ruhe finden/ Entspannungs-Methoden
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
                  Ruhe finden/ Stressreduktion / MFT EFT Methode
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
                <a style={{ textDecoration: "none" }}>EMDR-Coaching</a>
              </Link>
            </Card.Header>
          </Card>
        </Accordion>
      </>
    );
}

export default SideMenue