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
import { useAmp } from 'next/amp';
import Head from 'next/head';
const HeaderPicture = dynamic(() => import('../../components/HeaderPicture'));

// export const config = { amp: 'hybrid' }

const Farbpunktur = () => {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>Farbpunktur</title>
      </Head>
      <HeaderPicture text="Farbpunktur" />
      <section>
        <Container>
          <Row>
            {/* Sitemenue */}
            <Col md={4} className="d-none d-sm-block">
              <SideMenue />
            </Col>
            {/* Main Content */}
            <Col
              md={1}
              className={`d-none d-sm-block ${vl}`}
              style={{ color: 'black' }}
            ></Col>
            <Col md={7}>
              <div className={inhaltBehandlung}>
                <h2 className="mx-auto">Reflexzonen oder Akupunktur-Punkte</h2>
                <br />

                <p>
                  Reflexzonen oder Akupunktur-Punkte können nicht nur mit den
                  Händen therapiert werden, sondern auch mit einem
                  Farbakupunktur-Gerät.
                </p>
                {isAmp ? (
                  <amp-img
                    layout="responsive"
                    width="800"
                    height="600"
                    src="/img_webp/Farbpunktur.webp"
                    alt="Farbpunktur - Physiopraxis"
                  />
                ) : (
                  <Image
                    className="rounded-3"
                    src="/img_avif/Farbpunktur.avif"
                    layout="responsive"
                    width={800}
                    height={600}
                    quality="10"
                    alt="Farbpunktur - Physiopraxis"
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <MobileSideMenue />
    </>
  );
};

export default Farbpunktur;
