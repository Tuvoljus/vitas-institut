import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { BsPlus } from "@react-icons/all-files/bs/BsPlus"
import { iconStyle } from '../../scss/Icons.module.scss'
import { Container } from 'react-bootstrap';

import { vl } from '../../scss/styles.module.scss'
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';


// export const config = { amp: 'hybrid' }

const Saugwellen_Therapie = () => {   
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
              <h1>Triggerpunktbehandlung</h1>
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
                  <h2 className="mx-auto">Saugwellen-Therapie</h2>

                  <br />
                  <p>
                    Die Saugwellen-Behandlung ist ein Verbindung von Schröpfen
                    und Massage. Durch das Vakuumgerät wird eine dauerne
                    Sogwirkung ausgeübt. Die Stärke kann genau dosiert werden.
                    Das Schröpfglas kann so auf der Haut bewegt werden.
                  </p>
                  <p>
                    In der Indikationsliste finden sie viele Möglichkeiten für
                    die unterstützende Wirkung der Saugwellen-Behandlung.
                  </p>
                  <p>Hervorzuheben ist die Narbenmobilisation.</p>
                  <p style={{ fontWeight: "600" }}>
                    <a href="https://www.pneumatron.de/">www.pneumatron.de/</a>
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

export default Saugwellen_Therapie