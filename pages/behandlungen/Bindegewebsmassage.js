import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Container } from "react-bootstrap";

import { vl } from "../../scss/styles.module.scss";
import SideMenue from "../../components/SideMenue";
import MobileSideMenue from "../../components/MobileSideMenue";

// export const config = { amp: 'hybrid' }

const Bindegewebsmassage = () => {

  return (
    <>
      <div>
        <Container>
          <Row
            style={{ position: "absolute", zIndex: "2" }}
            className="align-self-center"
          >
            <h1>Bindegewebsmassage</h1>
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
                <h2 className="mx-auto">Bindegewebsmassage</h2>

                <br />
                <p>
                  Dies ist eine spezielle Technik, die im Bindegewebe der Haut
                  ansetzt. Sie löst und Verklebungen zwischen diesen Schichten.
                  Direkte Beeinflussung des vegetativen Nervensystems, welches
                  Organe und Gefäße steuert. Durch den lokalen
                  Spannungsausgleich werden auch Störungen des
                  Bewegungsapparates verbessert.
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

export default Bindegewebsmassage
