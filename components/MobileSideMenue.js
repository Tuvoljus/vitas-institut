import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';

import { sideMenue } from '../scss/Submenue.module.scss';
import { NavItem } from 'react-bootstrap';
//import { BsChevronDoubleRight } from "@react-icons/all-files/bs/BsChevronDoubleRight"
import { BsFillCaretRightFill } from '@react-icons/all-files/bs/BsFillCaretRightFill';

const MobileSideMenue = () => {
  const [show, setShow] = useState(false);
  const [transform, setTransform] = useState("translate(0,60px)")

  const [scrollTop, setScrollTop] = useState(80);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sideIcon = {
    // transform: "translate(0, 30px)",
    // transition: "1s ease-in-out",
    // MozTransition: "5s ease-in-out",
    // webkitTransition:" 5s ease-in-out",
    transition: "width 2s, height 2s, transform 1s",
    transform: transform ,
    marginLeft: "-1rem",
    position: "fixed",
    textAlign:"center",
    top: "90%",
    color:" #a0d5e1",
    fontSize: "50px"
  }

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > 100) {
        setTransform("translate(0,-10px)")
      } else {
        setTransform("translate(0,60px)")
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <section className="d-block d-sm-none">
        <div className="container min-vh-100 py-2">
          <div className="row">
            <div className="col-sm-2">
              {/*Smartphone Navigations-Icon */}

              <div>
                <Link href="#">
                  <a onClick={handleShow} style={sideIcon}>
                    
                      <div>
                        <BsFillCaretRightFill
                          data-bs-toggle="offcanvas"
                          aria-label="offcanvas"
                        />
                      </div>
                   
                    {/* <BsChevronDoubleRight
                        data-bs-toggle="offcanvas"
                        aria-label="offcanvas"
                      /> */}
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
                            <Nav.Link style={{ paddingLeft: '0' }}>
                              Klassische Krankengymnastik/ Manuelle Therapien
                            </Nav.Link>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Nav.Link href="/behandlungen/Schmerztherapie_nach_Liebscher_und_Bracht">
                              Schmerztherapie nach Liebscher & Bracht
                            </Nav.Link>
                            <Nav.Link href="/behandlungen/Golgi_Punkt_Schmerztherapie">
                              Golgi Punkt Schmerztherapie
                            </Nav.Link>
                            <Nav.Link href="/behandlungen/Manuelle_Therapie_Marnitz_Cyriax">
                              Manuelle Therapie / Marnitz / Cyriax
                            </Nav.Link>
                            <Nav.Link href="/behandlungen/Methode_Dr_Furter">
                              Methode nach Dr. Furter
                            </Nav.Link>
                            <Nav.Link href="/behandlungen/Matrix-Rhythmus-Therapie-MaRhyThe">
                              Matrix-Rhythmus-Therapie MaRhyThe
                            </Nav.Link>
                            <Nav.Link href="/behandlungen/Novafon_Schallwellenbehandllung">
                              Novafon Schallwellenbehandllung
                            </Nav.Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Nav.Link href="/behandlungen/Massage">Massage</Nav.Link>
                      <Nav.Link href="/behandlungen/Pneumatische_Pulsations-Massage">
                        Pneumatische Pulsations-Massage (Pneumatron 200)
                      </Nav.Link>
                      <Accordion flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <Nav.Link style={{ paddingLeft: '0' }}>
                              Klassische Massage
                            </Nav.Link>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Nav.Link href="/behandlungen/Bindegewebsmassage">
                              Bindegewebsmassage
                            </Nav.Link>
                            <Nav.Link href="/behandlungen/Colonmassage_Viscerale_Mobilisation">
                              Colon-Massage / Viscerale Mobilisation
                            </Nav.Link>
                            <Nav.Link href="/behandlungen/Triggerpunktbehandlung">
                              Triggerpunktbehandlung
                            </Nav.Link>
                            <Nav.Link href="/behandlungen/Saugwellen_Therapie">
                              Saugwellen-Therapie
                            </Nav.Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Nav.Link href="/behandlungen/Atemtherapie_der_befreite_Atem">
                        Atemtherapie; der befreite Atem
                      </Nav.Link>
                      <Nav.Link href="/behandlungen/Lymph_Mobilisation_Lymphdrainage">
                        Lymph-Mobilisation
                      </Nav.Link>
                      <Nav.Link href="/behandlungen/Reflexzonen_Therapie">
                        Reflexzonen-Therapie
                      </Nav.Link>
                      <Accordion flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <Nav.Link style={{ paddingLeft: '0' }}>
                              Scenar Therapie
                            </Nav.Link>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Nav.Link href="/behandlungen/Scenar_Therapie">
                              Denas Therapie
                            </Nav.Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Nav.Link href="/behandlungen/Osflow_Schwingungsplatte">
                        Osflow Schwingungsplatte
                      </Nav.Link>
                      <Nav.Link href="/behandlungen/Entspannungs-Methoden">
                        Ruhe finden/ Entspannungs-Methoden
                      </Nav.Link>
                      <Nav.Link href="/behandlungen/Stressreduktion_EFT">
                        Ruhe finden/ Stressreduktion / MFT EFT Methode
                      </Nav.Link>
                      <Nav.Link href="/behandlungen/EMDR-Coaching">
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
};

export default MobileSideMenue;
