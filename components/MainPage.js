import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { iconStyle } from '../scss/Icons.module.scss';
import { ColorFont } from '../scss/styles.module.scss';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useAmp } from 'next/amp';
import { BsPlus } from '@react-icons/all-files/bs/BsPlus';

const SectionAbout = dynamic(() => import('./SectionAbout'));
const SectionWegpunkte = dynamic(() => import('./SectionWegpunkte'));
const SectionQualification = dynamic(() => import('./SectionQualification'));

export const config = { amp: 'hybrid' };

const MainPage = () => {
  const isAmp = useAmp();
  const ImagePath = '/img/Header_Bild_Gruen.jpg';
  const ImagePathWebP = '/img_webp/Header_Bild_Gruen.webp';

  // const iconStyle = {
  //     color: "#1663b1",
  //     fontSize: "1.4rem"
  // }
  return (
    <>
      <Head>
        <title>
          Vitas Institut Bernhard Käser Physiotherapeut - Physiotherapie am
          Dendlinger Tor
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Physiopraxis Altstadt Lehel, Sendlinger Tor Inhaber Bernhard Käser Physiotherapeut. Seit über 35 Jahren behandle ich Menschen mit Herz und Sachverstand!"
        />
        <meta
          name="keywords"
          content="Physiotherapeut Altstadt Lehel Sendlinger Tor"
        />
        <Script
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'LocalBusiness',
              name: 'Vitas-Institut Bernhard Käser',
              description: 'Bernhard Käser - Physiotherapeut Altstadt / Lehel',
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
      <div>
        {/*Mobile*/}
        <Container className="d-block d-sm-none">
          <Row
            style={{ zIndex: '2', marginTop: '1rem' }}
            className="p-4 d-flex align-items-center justify-content-center"
          >
            <Col xs={10} sm={6} md={4} lg={4} xl={3}>
              <div
                style={{
                  boxShadow:
                    '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                }}
              >
                {isAmp ? (
                  <amp-img
                    layout="responsive"
                    width="800"
                    height="1067"
                    src="/img_webp/Bernhard_Käser_800x1067.webp"
                    alt="Bernhard Käser Physiotherapeut - Physiopraxis"
                  />
                ) : (
                  <Image
                    className="rounded-3"
                    src="/img_avif/Bernhard_Käser_800x1067.avif"
                    layout="responsive"
                    width={800}
                    height={1067}
                    quality="10"
                    alt="Bernhard Käser Physiotherapeut - Physiopraxis"
                  />
                )}
              </div>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={8}
              lg={8}
              xl={8}
              className={`align-self-center ${ColorFont}`}
              style={{ paddingTop: '2rem' }}
            >
              <h5 className="">… weil Gesundheit glücklich macht</h5>

              <ul
                style={{
                  listStyle: 'none',
                  lineHeight: '200%',
                  paddingLeft: '0rem',
                }}
              >
                <li>
                  <BsPlus className={iconStyle} /> Was wirkt bei Ihnen am
                  besten?
                </li>
                <li>
                  <BsPlus className={iconStyle} /> Dazu finden wir gemeinsame
                  Lösungen.
                </li>
                <li>
                  <BsPlus className={iconStyle} /> Ich behandle Sie mit Kopf,
                  Herz und Händen.
                </li>
                <li>
                  <BsPlus className={iconStyle} /> Sie lernen sich und Ihren
                  Körper besser kennen.
                </li>
                <li>
                  <BsPlus className={iconStyle} /> Sie bekommen viel Hilfe zur
                  Selbsthilfe.
                </li>
                <li>
                  <BsPlus className={iconStyle} /> Ich nehme mir viel Zeit für
                  Ihre Bedürfnisse (mind. 50 Minuten).
                </li>
              </ul>

              <span style={{ fontWeight: '600' }}>
                Seit 35 Jahren ist Ihre neue Lebensqualität mein Ansporn.
              </span>
              <br />
              <br />
              <span style={{ fontWeight: '600' }}>
                Mehr zum <b>Stressmanagment</b> unter{' '}
                <Link
                  href="https://www.vitas-stressmanagement.de/"
                  passHref={true}
                >
                  <a style={{ textDecoration: 'none' }} target="_blank">
                    www.vitas-stressmanagement.de
                  </a>
                </Link>
              </span>
            </Col>
          </Row>
        </Container>
        {/*Ende Mobile*/}

        {/*Desktop*/}
        <Container className="d-none d-md-block d-lg-block">
          <Row
            style={{ zIndex: '2', marginTop: '5rem' }}
            className="w-75 p-3 position-absolute"
          >
            <Col xs={10} sm={8} md={4} lg={4} xl={3}>
              <div
                style={{
                  boxShadow:
                    '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                }}
              >
                {isAmp ? (
                  <amp-img
                    layout="responsive"
                    width="800"
                    height="1067"
                    src="/img_webp/Bernhard_Käser_800x1067.webp"
                    alt="Bernhard Käser Physiotherapeut - Physiopraxis"
                  />
                ) : (
                  <Image
                    className="rounded-3"
                    src="/img_avif/Bernhard_Käser_800x1067.avif"
                    layout="responsive"
                    width={800}
                    height={1067}
                    quality="50"
                    alt="Bernhard Käser Physiotherapeut - Physiopraxis"
                  />
                )}
              </div>
            </Col>
            <Col
              xs={12}
              sm={4}
              md={8}
              lg={8}
              xl={8}
              className={`align-self-center ${ColorFont}`}
              style={{ paddingLeft: '3rem' }}
            >
              <h5>… weil Gesundheit glücklich macht</h5>
              <span>
                <ul style={{ listStyle: 'none', lineHeight: '200%' }}>
                  <li>
                    <BsPlus className={iconStyle} /> Was wirkt bei Ihnen am
                    besten?
                  </li>
                  <li>
                    <BsPlus className={iconStyle} /> Dazu finden wir gemeinsame
                    Lösungen.
                  </li>
                  <li>
                    <BsPlus className={iconStyle} /> Ich behandle Sie mit Kopf,
                    Herz und Händen.
                  </li>
                  <li>
                    <BsPlus className={iconStyle} /> Sie lernen sich und Ihren
                    Körper besser kennen.
                  </li>
                  <li>
                    <BsPlus className={iconStyle} /> Sie bekommen viel Hilfe zur
                    Selbsthilfe.
                  </li>
                  <li>
                    <BsPlus className={iconStyle} /> Ich nehme mir viel Zeit für
                    Ihre Bedürfnisse (mind. 50 Minuten).
                  </li>
                </ul>
              </span>
              <span style={{ fontWeight: '600' }}>
                Seit 38 Jahren ist Ihre neue Lebensqualität mein Ansporn.
              </span>
              <br />
              <br />
              <span style={{ fontWeight: '600' }}>
                Mehr zum <b>Stressmanagment</b> unter{' '}
                <Link
                  href="https://www.vitas-stressmanagement.de/"
                  passHref={true}
                >
                  <a style={{ textDecoration: 'none' }} target="_blank">
                    www.vitas-stressmanagement.de
                  </a>
                </Link>
              </span>
            </Col>
          </Row>
        </Container>
        {/*Ende Desktop*/}
        <div className="d-none d-sm-block">
          {isAmp ? (
            <amp-img
              layout="responsive"
              width="1920"
              height="720"
              src={ImagePathWebP}
              alt="Bernhard Käser Physiotherapeut - Physiopraxis"
            />
          ) : (
            <div>
              <Image
                src={ImagePath}
                layout="responsive"
                width={1920}
                height={620}
                objectFit="cover"
                quality="100"
                alt="Bernhard Käser Physiotherapeut - Physiopraxis"
                priority
              />
            </div>
          )}
        </div>
      </div>
      <main>
        <section style={{ paddingBottom: '0px' }}>
          <SectionQualification />
        </section>
        <section style={{ paddingTop: '0px !important', paddingBottom: '0px' }}>
          <SectionWegpunkte />
        </section>
        <section style={{ paddingTop: '0px !important' }}>
          <SectionAbout />
        </section>

        {/* <NextScript /> */}
      </main>
    </>
  );
};

export default MainPage;
