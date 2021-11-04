import React, { useState } from 'react'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Container } from 'react-bootstrap';

import { vl } from '../../scss/styles.module.scss'
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';


// export const config = { amp: 'hybrid' }

const Pneumatische_Pulsations_Massage = () => {   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <div>
          <Container>
            <Row
              style={{ position: "absolute", zIndex: "2" }}
              className="align-self-center"
            >
              <h1>Einführung Behandlungen</h1>
            </Row>
          </Container>
          <Image
            src="/img/Header_Bild_Rot.jpg"
            layout="responsive"
            objectFit="cover"
            width={1920}
            height={420}
            quality="10"
          />
        </div>
        <section className="d-none d-sm-block">
          <Container>
            <Row>
              {/* Sitemenue */}
              <Col md={4}>
                <SideMenue />
              </Col>
              {/* Main Content */}
              <Col md={1} className={vl} style={{ color: "black" }}></Col>
              <Col md={7}>
                <div style={{ paddingLeft: "3rem", color: "#707070" }}>
                  <h2 className="mx-auto">Pneumatische Pulsations-Massage</h2>
                  <div className="lead">
                    (Pneumatron 200) / (HeVa Tech PRV 2 Gerät)
                  </div>
                  <br />
                  <p>
                    Mit dem Pneumatron 200 kann man am Körper eine pulsierende
                    Massagebewegung erzeugen die das Gewebe vertikal von innen
                    nach außen dehnt. (Gewebsentlastende Schröpfkopfmassage)
                  </p>
                  <p>
                    Optimale Anregung des Lymphsystems und gleichzeitige
                    Beschleunigung der Blutzirkulation. Verbesserung des
                    gesamten zellulären Stoffwechsels der Gewebestrukturen. Alle
                    notwendigen körpereigenenen Entgiftungsvorgänge und
                    Heilungsprozesse können durch diese sehr sinnvolle
                    Behandlungs-Methode gründlicher und schneller ablaufen.
                  </p>
                  <p>
                    Die Patienten lieben diese Behandlung und nennen das Gerät
                    liebevoll &ldquo;Schnuffi&ldquo;, wegen der Pump- und
                    Ansauggeräusche.
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    <a href="https://www.pneumed.de/">www.pneumed.de</a>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <MobileSideMenue />
      </>
    );
}

export default Pneumatische_Pulsations_Massage