import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { vl, heading, ColorFont } from '../scss/styles.module.scss';

import { useAmp } from 'next/amp';

const Links = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <h1
                style={{ position: 'absolute', zIndex: '2' }}
                className={`d-flex align-items-center ${heading}`}
              >
                Links
              </h1>
            </Col>
          </Row>
        </Container>
        <Image
          src="/img/Header_Bild_blau.jpg"
          layout="fill"
          objectFit="cover"
          quality="100"
        />
      </section>
      <section>
        <Container>
          <Row>
            <Col md={4} className={ColorFont}>
              <h5>Zahnarzt München</h5>
            </Col>
            <Col
              md={1}
              className={`d-none d-sm-block ${vl}`}
              style={{ color: 'black' }}
            ></Col>
            <Col md={7} className={ColorFont}>
              <p style={{ fontWeight: 600 }}>
                MunichDent - Zahnarzt Michael Javier Weiß - München
              </p>

              <p>
                Zahnarztpraxis im Stadtbezierk
                Thalkirchen-Obersendling-Forstenried-Solln
              </p>

              <p style={{ fontWeight: 400 }}>
                <a href="https://www.munich-dent.de">www.munich-dent.de</a>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={4} className={ColorFont}>
              <h5>Apotheke</h5>
            </Col>
            <Col
              md={1}
              className={`d-none d-sm-block ${vl}`}
              style={{ color: 'black' }}
            ></Col>
            <Col md={7} className={ColorFont}>
              <p style={{ fontWeight: 600 }}>
                Gut betreut in der Balde- Apotheke
              </p>
              <p>
                Reiseapotheke auch für die Tropenländer? Sie werden gut beraten
                in der Balde-Apotheke
              </p>
              <p style={{ fontWeight: 400 }}>
                <a href="https://www.balde-apotheke.de">
                  www.balde-apotheke.de
                </a>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={4} className={ColorFont}>
              <h5>Zahngesundheit</h5>
            </Col>
            <Col
              md={1}
              className={`d-none d-sm-block ${vl}`}
              style={{ color: 'black' }}
            ></Col>
            <Col md={7} className={ColorFont}>
              <p style={{ fontWeight: 600 }}>
                GZFA Gmbh Gesellschaft für Zahngesundheit, Funktion und Ästhetik
              </p>
              <p></p>
              <div
                style={{
                  fontWeight: 400,
                  listStyle: 'none',
                  textDecoration: 'none',
                }}
              >
                <li>
                  <a href="https://www.gzfa.de">www.gzfa.de</a>
                </li>
                <li>
                  <a href="https://www.dros-konzept.com">
                    www.dros-konzept.com
                  </a>
                </li>

                <li>
                  <a href="https://www.implant24.com">www.implant24.com</a>
                </li>

                <li>
                  <a href="https://www.kwdt.de">www.kwdt.de</a>
                </li>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={4} className={ColorFont}>
              <h5>Schröpftherapie-Geräte</h5>
            </Col>
            <Col
              md={1}
              className={`d-none d-sm-block ${vl}`}
              style={{ color: 'black' }}
            ></Col>
            <Col md={7} className={ColorFont}>
              <p style={{ fontWeight: 600 }}>Schröpftherapie-Geräte</p>
              <p>Schröpftherapie-Geräte und Zubehör</p>
              <div
                style={{
                  fontWeight: 400,
                  listStyle: 'none',
                  textDecoration: 'none',
                }}
              >
                <li>
                  <a href="https://www.hevatech.com">www.hevatech.com</a>
                </li>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={4} className={ColorFont}>
              <h5>Pneumatische Pulsations-Massage</h5>
            </Col>
            <Col
              md={1}
              className={`d-none d-sm-block ${vl}`}
              style={{ color: 'black' }}
            ></Col>
            <Col md={7} className={ColorFont}>
              <p style={{ fontWeight: 600 }}>
                Pneumatische Pulsations-Massage (Pneumatron 200)
              </p>
              <p>
                <span style={{ textDecoration: 'underline' }}>
                  Die Patienten lieben es.
                </span>{' '}
                <Link href="/behandlungen/Pneumatische-Pulsations-Massage">
                  siehe unter Behandlungen / Pneumatische Pulsations-Massage
                  (Pneumatron 200)
                </Link>
              </p>
              <div
                style={{
                  fontWeight: 400,
                  listStyle: 'none',
                  textDecoration: 'none',
                }}
              >
                <li>
                  <a href="https://www.pneumed.de">www.pneumed.de</a>
                </li>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={4} className={ColorFont}>
              <h5>Emotionale Freiheits-Technik EFT</h5>
            </Col>
            <Col
              md={1}
              className={`d-none d-sm-block ${vl}`}
              style={{ color: 'black' }}
            ></Col>
            <Col md={7} className={ColorFont}>
              <p style={{ fontWeight: 600 }}>
                Emotionale Freiheits-Technik EFT (Klopfakupressur)
              </p>
              <p>
                Hier finden Sie einige Fallbeschreibungen und
                Hintergrundinformationen zu dieser sehr effektiven
                Stressbewältigungs-Technik.
              </p>
              <div
                style={{
                  fontWeight: 400,
                  listStyle: 'none',
                  textDecoration: 'none',
                }}
              >
                <li>
                  <a href="https://www.official-eft.de">www.official-eft.de</a>{' '}
                  für EFT, oder schauen Sie auf{' '}
                  <Link href="/behandlungen/Stressreduktion-EFT">
                    meiner Seite
                  </Link>
                </li>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Links;
