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

const Behandlungen_nach_Reflexzonen = () => {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>Behandlungen-nach-Reflexzonen</title>
      </Head>
      <HeaderPicture text="Behandlungen nach Reflexzonen" />
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
                <h2 className="mx-auto">
                  Powertube®-Hochfrequenztechnologie Quick Zap
                </h2>
                <br />

                <p>
                  Nutzen Sie die einzigartige Powertube®-Hochfrequenztechnologie
                  zur individuellen Selbstbehandlung aller Körperregionen.
                  Schmerzen können vielfältige Ursachen haben. Die Powertube ist
                  Ihr perfekter mobiler Begleiter für die Therapie von Schmerzen
                  in allen Körperregionen.
                </p>
                {isAmp ? (
                  <amp-img
                    layout="responsive"
                    width="800"
                    height="600"
                    src="/img_webp/Powertube.webp"
                    alt="Therapiegerät KST-2010 - Physiopraxis"
                  />
                ) : (
                  <Image
                    className="rounded-3"
                    src="/img_avif/Powertube.avif"
                    layout="responsive"
                    width={800}
                    height={600}
                    quality="10"
                    alt="Therapiegerät KST-2010 - Physiopraxis"
                  />
                )}
                <p></p>
                {isAmp ? (
                  <amp-img
                    layout="responsive"
                    width="800"
                    height="600"
                    src="/img_webp/Powertube_2.webp"
                    alt="Katzenschnurr Behandlung - Physiopraxis"
                  />
                ) : (
                  <Image
                    className="rounded-3"
                    src="/img_avif/Powertube_2.avif"
                    layout="responsive"
                    width={800}
                    height={600}
                    quality="10"
                    alt="Katzenschnurr Behandlung - Physiopraxis"
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

export default Behandlungen_nach_Reflexzonen;
