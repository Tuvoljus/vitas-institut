import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import { vl, heading, inhaltBehandlung } from '../../scss/styles.module.scss';
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';

import dynamic from 'next/dynamic';
import Head from 'next/head';
const HeaderPicture = dynamic(() => import('../../components/HeaderPicture'));

const Scenar_Therapie = () => {
  return (
    <>
      <Head>
        <title>Physiopraxis - Scenar Therapie</title>
      </Head>
      <HeaderPicture text="Scenar Therapie" />
      <section>
        <Container>
          <Row>
            {/* Sitemenue */}
            <Col md={4} className="d-none d-sm-block">
              {/* <SideMenue /> */}
              <Accordion flush defaultActiveKey="2">
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
                          <a style={{ textDecoration: 'none' }}>
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
                      {/* Matrix-Rhythmus-Therapie */}
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
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Scenar-Therapie</Accordion.Header>
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
                          href="/behandlungen/Scenar-Therapie"
                          replace
                          scroll={false}
                        >
                          <a style={{ textDecoration: 'none' }}>
                            Denas Therapie
                          </a>
                        </Link>
                      </li>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
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
                <h2 className="mx-auto">S.c.e.n.a.r-Therapie DENAS Therapie</h2>

                <br />
                <p>
                  Das S.c.e.n.a.r ist ein für das russische Weltraumprogramm
                  entwickeltes Elektrotherapiegerät. Die gesundheitliche
                  Verfassung der Kosmonauten während ihres Weltraumaufenthalts
                  wurde damit unterstützt.
                </p>
                <p>
                  <b>Bei mir in der Praxis verwende ich das Denas-Gerät.</b>
                </p>
                <p>
                  Denas-Therapie (DENS-Gerät)
                  dynamische-elektro-neuro-stimmulation beruht auf dem gleichen
                  Prinzip mit einem Vegetativ-Programm.
                </p>
                <p>
                  Seit über 20 Jahren wird es von Ärzten in Kliniken und in
                  Praxen angewandt. Es ist u.a. für die Behandlung von akuten
                  und chronischen Schmerzen geeignet. Durch die elektrischen
                  Impulse werden spezifische Schmerzleitungsfasern des
                  Nevensystems stimmuliert (C-Fasern). Hierbei werden im
                  zentralen Nevensystem körpereigene opioide Proteine
                  freigesetzt, die den Schmerz dämpfen.
                </p>
                <p>
                  Während der Behandlung wird von dem Gerät der Hautwiderstand
                  gemessen. Anhand dessen Veränderung werden Impulsstärke,
                  Impulsdauer und Impulsfrequenz moduliert. Auf diese Weise ist
                  gewährleistet, dass die spezifischen Schmerzleitungsfasern
                  durch unterschiedliche, individuell dosierte Impulse
                  stimuliert werden. Diese Besonderheit gab dem
                  Therapieverfahren auch seinen Namen:
                </p>
                <p>
                  <b>S</b>elf-<b>c</b>ontrolled <b>e</b>nergo-<b>n</b>euro-
                  <b>a</b>daptive <b>r</b>egulation
                </p>
                <p>
                  Über 50 000 dokumentierte Fälle. Große Zentren sind in Kanada,
                  Holland und England.
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

export default Scenar_Therapie;
