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

const Triggerpunktbehandlung = () => {   
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
                  <h2 className="mx-auto">Triggerpunktbehandlung</h2>

                  <br />
                  <p>
                    Neben den Sehnenansätzen ({">"} Liebscher&Bracht), kann man
                    über die Behandlung der Triggerpunkte in den Faszien und der
                    Muskulatur gute Erfolge bei der Schmerzlinderung erzielen.
                  </p>
                  <p>
                    Triggerpunkte sind knötchen- bis strangförmige Verhärtungen
                    in der Muskulatur und den Faszien.
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    <a href="http://www.bodyways.de/trigger.html">
                      www.bodyways.de/
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
}

export default Triggerpunktbehandlung