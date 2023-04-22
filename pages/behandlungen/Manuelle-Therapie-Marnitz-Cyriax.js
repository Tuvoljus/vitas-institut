import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Head from 'next/head';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import { vl, heading, inhaltBehandlung } from '../../scss/styles.module.scss';
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';

import dynamic from 'next/dynamic';
const HeaderPicture = dynamic(() => import('../../components/HeaderPicture'));

const Manuelle_Therapie_Marnitz_Cyriax = () => {
  return (
    <>
      <Head>
        <title>Physiopraxis Manuelle Therapie Marnitz Cyriax</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Manuelle Therapie - Bernhard Käser" />
        <meta name="keywords" content="Manuelle Therapie" />
        <Script
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'LocalBusiness',
              name: 'Vitas-Institut Manuelle Therapie',
              description: 'Bernhard Käser - Manuelle Therapie',
              image: 'https://www.vitas-institut.de/img/Bernhard.jpg',
              telephone: '+49 89 23 23 06 70',
              email: 'bk@vitas-institut.de',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Oberanger 42',
                addressLocality: 'München',
                addressRegion: 'Bayern',
                addressCountry: 'Deutschland',
                postalCode: '80331',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 48.13413978555193,
                longitude: 11.569055768148749,
              },
              priceRange: '€',
              openingHours: ['Mo - Do 10:00-18:00'],
              url: 'https://www.vitas-institut.de',
            }),
          }}
        />
      </Head>
      <HeaderPicture text="Manuelle Therapie" />
      <section>
        <Container>
          <Row>
            {/* Sitemenue */}
            <Col md={4} className="d-none d-sm-block">
              {/* <SideMenue />                             */}
              <Accordion flush>
                <Card>
                  <Card.Header>
                    <Link href="/behandlungen" replace scroll={false}>
                      <a style={{ textDecoration: 'none' }}>
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
                      <a style={{ textDecoration: 'none' }}>
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
                        lineHeight: '3rem',
                        paddingLeft: '1rem',
                        listStyle: 'none',
                      }}
                    >
                      <li>
                        <Link
                          href="/behandlungen/Schmerztherapie-nach-Liebscher-und-Bracht"
                          replace
                          scroll={false}
                        >
                          <a style={{ textDecoration: 'none' }}>
                            Schmerztherapie nach Liebscher & Bracht
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/behandlungen/Golgi-Punkt-Schmerztherapie"
                          replace
                          scroll={false}
                        >
                          <a style={{ textDecoration: 'none' }}>
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
                          <a
                            style={{
                              textDecoration: 'none',
                              color: 'rgb(48, 134, 215)',
                            }}
                          >
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
                          <a style={{ textDecoration: 'none' }}>
                            Methode nach Dr. Furter{' '}
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/behandlungen/Matrix-Rhythmus-Therapie-MaRhyThe"
                          replace
                          scroll={false}
                        >
                          <a style={{ textDecoration: 'none' }}>
                            Matrix-Rhythmus-Therapie MaRhyThe
                          </a>
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/behandlungen/Novafon-Schallwellenbehandllung"
                          replace
                          scroll={false}
                        >
                          <a style={{ textDecoration: 'none' }}>
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
                      <a style={{ textDecoration: 'none' }}>Massage</a>
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
                      <a style={{ textDecoration: 'none' }}>
                        Pneumatische Pulsations-Massage (Pneumatron 200)
                      </a>
                    </Link>
                  </Card.Header>
                </Card>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Klassische Massage</Accordion.Header>
                  <Accordion.Body>
                    <div
                      style={{
                        lineHeight: '3rem',
                        paddingLeft: '1rem',
                        listStyle: 'none',
                      }}
                    >
                      <li>
                        <Link
                          href="/behandlungen/Bindegewebsmassage"
                          replace
                          scroll={false}
                        >
                          <a style={{ textDecoration: 'none' }}>
                            Bindegewebsmassage
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/behandlungen/Colonmassage-Viscerale-Mobilisation"
                          replace
                          scroll={false}
                        >
                          <a style={{ textDecoration: 'none' }}>
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
                          <a style={{ textDecoration: 'none' }}>
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
                          <a style={{ textDecoration: 'none' }}>
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
                      <a style={{ textDecoration: 'none' }}>
                        Atemtherapie; der befreite Atem
                      </a>
                    </Link>
                  </Card.Header>
                </Card>
                <Card>
                  <Card.Header>
                    <Link
                      href="/behandlungen/Lymph-Mobilisation-Lymphdrainage"
                      replace
                      scroll={false}
                    >
                      <a style={{ textDecoration: 'none' }}>
                        Lymph-Mobilisation
                      </a>
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
                      <a style={{ textDecoration: 'none' }}>
                        Reflexzonen-Therapie
                      </a>
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
                      <a style={{ textDecoration: 'none' }}>
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
                      <a style={{ textDecoration: 'none' }}>
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
                      <a style={{ textDecoration: 'none' }}>
                        Ruhe finden/ Stressreduktion / MFT EFT Methode
                      </a>
                    </Link>
                  </Card.Header>
                </Card>
                <Card>
                  <Card.Header>
                    <Link
                      href="/behandlungen/EMDR-Coaching"
                      replace
                      scroll={false}
                    >
                      <a style={{ textDecoration: 'none' }}>EMDR-Coaching</a>
                    </Link>
                  </Card.Header>
                </Card>
                <Card>
                  <Card.Header>
                    <Link
                      href="/behandlungen/Katzenschnurr-Prinzip"
                      replace
                      scroll={false}
                    >
                      <a style={{ textDecoration: 'none' }}>
                        Katzenschnurr-Prinzip
                      </a>
                    </Link>
                  </Card.Header>
                </Card>
              </Accordion>
            </Col>
            {/* Main Content */}
            <Col
              md={1}
              className={`d-none d-sm-block ${vl}`}
              style={{ color: 'black' }}
            ></Col>
            <Col md={7}>
              <div className={inhaltBehandlung}>
                <h2 className="mx-auto">
                  Manuelle Therapie / Marnitz / Cyriax
                </h2>

                <br />
                <p>
                  Alle manuellen Therapien sind gezielte, gelenkschonende
                  Behandlungen. Sie werden bei Funktionsstörungen aller Gelenke
                  (auch Wirbelgelenke) angewendet. Die Auswahl der jeweiligen
                  Mobilisationstechniken wird bestimmt durch den Befund.
                  Eingeschränkte Bewegungsrichtungen, die Form des Gelenks,
                  spielen eine Rolle. Welche Strukturen sind besonders
                  betroffen? (Muskulatur, Faszie, Sehne, Kapsel, Periost,
                  Knochen).
                </p>

                <p style={{ fontWeight: '600' }}>
                  <a href="https://www.somatics.de">www.somatics.de</a>
                </p>
                <p style={{ fontWeight: '600' }}>
                  <a href="https://www.marnitz-therapie.de">
                    www.marnitz-therapie.de
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
};

export default Manuelle_Therapie_Marnitz_Cyriax;
