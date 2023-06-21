import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ColorFont, vlAnfahrt, heading } from '../scss/styles.module.scss';
import HeaderPicture from '../components/HeaderPicture';

import { useAmp } from 'next/amp';
export const config = { amp: 'hybrid' };

const Anfahrt = () => {
  const headlines = {
    fontWeight: '600',
  };

  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>Anfahrt Physiotherapie Praxis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Bernhard Käser Physiotherapeut in München Altstadt Lehel nähe Sendlinger Tor"
        />
        <meta
          name="keywords"
          content="Physiotherapeut Altstadt Lehel Sendlinger Tor"
        />
      </Head>
      <HeaderPicture text="Meine Praxis in München" />
      <Container className={ColorFont}>
        <section>
          <Row>
            <Col md={6}>
              <Row>
                <Col md={2}>
                  <h4>Praxis</h4>
                </Col>
                <Col md={1}>
                  <div
                    className={`col-md-1 d-none d-sm-block ${vlAnfahrt}`}
                  ></div>
                </Col>
                <Col>
                  <div className="text-center" style={{ fontSize: '1.2em' }}>
                    <p>
                      <span style={headlines}>
                        VITAS - Institut für Entspannungstechniken
                      </span>{' '}
                      <br />
                      Oberanger 42 | Nähe Sendlinger Tor <br />
                      80331 München
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={2}>
                  <h4>Anreise</h4>
                </Col>
                <Col md={1}>
                  <div
                    className={`col-md-1 d-none d-sm-block ${vlAnfahrt}`}
                  ></div>
                </Col>
                <Col>
                  <div className="text-center" style={{ fontSize: '1.2em' }}>
                    <p>
                      <span style={headlines}>Haltestelle Sendlinger Tor </span>
                      <br /> U1 / U2 / U3 / U6 / U7 / U8
                    </p>
                    <p>
                      <span style={headlines}>Straßenbahn</span> <br />
                      16 / 17 / 18 / 27 / 28
                    </p>
                    <p>
                      <span style={headlines}>Bus</span> <br /> 52 / 62
                    </p>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={2}>
                  <h4>Auto</h4>
                </Col>
                <Col md={1}>
                  <div
                    className={`col-md-1 d-none d-sm-block ${vlAnfahrt}`}
                  ></div>
                </Col>
                <Col md={9}>
                  <div
                    className="text-center"
                    style={{ fontSize: '1.2em', listStyle: 'none' }}
                  >
                    <p>
                      <span style={headlines}>Parkmöglichkeit:</span>
                    </p>

                    <li>
                      - Contipark Tiefgarage Oberanger 27
                      <br /> oder
                    </li>

                    <li>- Parkplätze vor dem Haus gebührenpflichtig</li>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              {isAmp ? (
                <amp-img
                  layout="responsive"
                  width="1129"
                  height="768"
                  src="/img_avif/Anfahrt_Bernhard_Käser.avif"
                  alt="Anfahrt Bernhard Käser Physiopraxis"
                />
              ) : (
                <Image
                  src="/img_avif/Anfahrt_Bernhard_Käser.avif"
                  layout="responsive"
                  quality="100"
                  alt="Anfahrt Bernhard Käser Physiopraxis"
                  width={1129}
                  height={768}
                />
              )}
            </Col>
          </Row>
        </section>
      </Container>
      {/* <section style={{ paddingBottom: "0px" }}>
        <div className={ColorFont}>
          <div className="container text-center" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-md-2">
                <h3>Praxis</h3>
              </div>
              <div className={`col-md-1 d-none d-sm-block ${vlAnfahrt}`}></div>
              <div className="col-md-8" style={{ fontSize: "1.2em" }}>
                <p>
                  VITAS - Institut für Entspannungstechniken <br />
                  Oberanger 42 | Nähe Sendlinger Tor <br />
                  80331 München
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "0px" }}>
        <div className={ColorFont}>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-2">
                <h3>Anreise</h3>
              </div>
              <div className={`col-md-1 d-none d-sm-block ${vlAnfahrt}`}></div>
              <div
                className="col-md-8 text-center"
                style={{ fontSize: "1.2em" }}
              >
                <p>Haltestelle Sendlinger Tor U1 / U2 / U3 / U6 / U7 / U8</p>
                <p>Straßenbahn 16 / 17 / 18 / 27 / 28</p>
                <p>Bus 52 / 62</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Anfahrt;
