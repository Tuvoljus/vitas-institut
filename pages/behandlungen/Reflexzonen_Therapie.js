import React, { useState, useEffect } from "react";
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

const Reflexzonen_Therapie = () => {
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
            <h1>Reflexzonen-Therapie</h1>
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
                <h2 className="mx-auto">Reflexzonen-Therapie</h2>

                <br />
                <p>
                  Die Behandlung am „Mikroystem" Fuß ist die älteste und
                  bekannteste Methode erfolgreicher Reflexzonen-Therapie. Die
                  peripheren Nervenenden befinden sich hauptsächlich im Fuß-,
                  Hand-, Ohr- und Kopfbereich. In diesen Bereichen ist der ganze
                  Körper mit all seinen Organen und Körperteilen abgebildet.
                  Diese Abbildung finden wir ferner in einem Teil der Großhi
                  rnrinde wieder.
                </p>
                <p>
                  Die Stimulierung dieser Zonen bewirkt eine vegetative Reaktion
                  im Körper. Die ausgelösten Reize dienen der Selbstregulation
                  des kranken Systems.
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

export default Reflexzonen_Therapie
