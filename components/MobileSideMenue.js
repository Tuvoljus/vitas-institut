import React, { useState } from 'react'
import Link from 'next/link'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion'
import Nav from 'react-bootstrap/Nav';

import { sideMenue, sideIcon } from '../scss/Submenue.module.scss'
import {NavItem} from 'react-bootstrap'
import { BsChevronDoubleRight } from "@react-icons/all-files/bs/BsChevronDoubleRight"

const MobileSideMenue = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <section className="d-block d-sm-none">
          <div className="container min-vh-100 py-2">
            <div className="row">
              <div className="col-sm-2">
                <div className={sideIcon}>
                  <Link href="#">
                    <a onClick={handleShow}>
                      <BsChevronDoubleRight
                        data-bs-toggle="offcanvas"
                        aria-label="offcanvas"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-sm-8">
                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  aria-labelledby="offcanvas"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Seitennavigation</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav>
                      <NavItem className={sideMenue}>
                        <Nav.Link href="/behandlungen">
                          Einführung Behandlungen
                        </Nav.Link>
                        <Nav.Link href="/behandlungen/was_kann_alles_behandelt_werden">
                          Was kann alles behandelt werden? - Indikationen
                        </Nav.Link>
                        <Accordion flush>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <Nav.Link style={{ paddingLeft: "0" }}>
                                Klassische Krankengymnastik/ Manuelle Therapien
                              </Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Nav.Link href="/behandlungen/Schmerztherapie_nach_Liebscher_und_Bracht">
                                Schmerztherapie nach Liebscher & Bracht
                              </Nav.Link>
                              <Nav.Link>Golgi Punkt Schmerztherapie</Nav.Link>
                              <Nav.Link>
                                Manuelle Therapie / Marnitz / Cyriax
                              </Nav.Link>
                              <Nav.Link>Methode nach Dr. Furter</Nav.Link>
                              <Nav.Link>
                                Matrix-Rhythmus-Therapie MaRhyThe
                              </Nav.Link>
                              <Nav.Link>
                                Novafon Schallwellenbehandllung
                              </Nav.Link>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Nav.Link href="/behandlungen/was_kann_alles_behandelt_werden">
                          Massage
                        </Nav.Link>
                        <Nav.Link href="/behandlungen/was_kann_alles_behandelt_werden">
                          Pneumatische Pulsations-Massage (Pneumatron 200)
                        </Nav.Link>
                        <Accordion flush>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <Nav.Link style={{ paddingLeft: "0" }}>
                                Klassische Massage
                              </Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Nav.Link>Bindegewebsmassage</Nav.Link>
                              <Nav.Link>
                                Colon-Massage / Viscerale Mobilisation
                              </Nav.Link>
                              <Nav.Link>Triggerpunktbehandlung</Nav.Link>
                              <Nav.Link>Saugwellen-Therapie</Nav.Link>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Nav.Link href="/behandlungen/was_kann_alles_behandelt_werden">
                          Atemtherapie; der befreite Atem
                        </Nav.Link>
                        <Nav.Link href="/behandlungen/was_kann_alles_behandelt_werden">
                          Lymph-Mobilisation
                        </Nav.Link>
                        <Nav.Link href="/behandlungen/was_kann_alles_behandelt_werden">
                          Reflexzonen-Therapie
                        </Nav.Link>
                        <Accordion flush>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>
                              <Nav.Link style={{ paddingLeft: "0" }}>
                                Scenar Therapie
                              </Nav.Link>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Nav.Link>Denas Therapie</Nav.Link>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Nav.Link href="/behandlungen/was_kann_alles_behandelt_werden">
                          Osflow Schwingungsplatte
                        </Nav.Link>
                        <Nav.Link href="/behandlungen/was_kann_alles_behandelt_werden">
                          Ruhe finden/ Entspannungs-Methoden
                        </Nav.Link>
                        <Nav.Link href="/behandlungen/was_kann_alles_behandelt_werden">
                          Ruhe finden/ Stressreduktion / MFT EFT Methode
                        </Nav.Link>
                        <Nav.Link href="/behandlungen/was_kann_alles_behandelt_werden">
                          EMDR-Coaching
                        </Nav.Link>
                      </NavItem>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default MobileSideMenue