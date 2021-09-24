import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BsPlus } from "@react-icons/all-files/bs/BsPlus";
import { iconStyle } from "../../scss/Icons.module.scss";
import { Container } from "react-bootstrap";

import { vl } from "../../scss/styles.module.scss";
import SideMenue from "../../components/SideMenue";
import MobileSideMenue from "../../components/MobileSideMenue";

// export const config = { amp: 'hybrid' }

const Osflow_Schwingungsplatte = () => {

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
                <h2 className="mx-auto">Osflow Schwingungsplatte</h2>

                <br />
                <p>
                  Der Osflow ist keine der herkömmlichen Vibrationsgeräte, denn
                  es geht dabei nicht vorrangig um Muskelkräftigung oder
                  Entspannung. Der Osflow erzeugt exakt kreisförmige Schwingung.
                  Diese Schwingung in der Alpha-Frquenz, erzeugt einen
                  Spiralwirbel um die stehende Person auf dem Osflow. Dieser
                  wirkt gleichgewichtsfördernd und reguliert die Faszien und die
                  Muskulatur in eine ausgeglichene Wohlspannung. Die Gelenke
                  werden bei gleichzeitig verbesserter Stabilität lockerer. Dies
                  ist bereits in Studien in den USA nachgewiesen.
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

export default Osflow_Schwingungsplatte
