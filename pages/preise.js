import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { vl, heading, ColorFont } from '../scss/styles.module.scss';

import { useAmp } from 'next/amp';

const Preise = () => {
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
                Preise
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
              <h3>Preise</h3>
            </Col>
            <Col
              md={1}
              className={`d-none d-sm-block ${vl}`}
              style={{ color: 'black' }}
            ></Col>
            <Col md={7} className={ColorFont}>
              <p>
                REZEPTE von PRIVAT-VERSICHERTEN mit z.B.
                <br />
                Massage,
                <br />
                Manuelle Therapie, <br />
                Krankengymnastik, <br />
                Elektrotherapie, <br />
                Naturmoor, <br />
                Krankengymnastik Gerätegestützt etc., <br />
                werden vollständig von den PRIVATKASSEN rückerstattet.
              </p>
              <br />
              <p style={{ fontWeight: 900 }}>
                SELBSTZAHLER 90 EUR ( 50 Minuten )
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Preise;
