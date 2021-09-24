import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Container } from "react-bootstrap";

import { vl } from "../../scss/styles.module.scss";
import SideMenue from "../../components/SideMenue";
import MobileSideMenue from "../../components/MobileSideMenue";

// export const config = { amp: 'hybrid' }

const EMDR_Coaching = () => {

  return (
    <>
      <div>
        <Container>
          <Row
            style={{ position: "absolute", zIndex: "2" }}
            className="align-self-center"
          >
            <h1>EMDR-Coaching</h1>
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
                <h2 className="mx-auto">EMDR-Coaching</h2>

                <br />
                <p>
                  Die EMDR-Methode stammt ursprünglich aus der Trauma-Therapie
                  und wird dort seit Jahren erfolgreich verwendet.
                </p>
                <p>
                  Das Kernelement der Methode sind Augenbewegungen oder links-
                  rechts- wechselnde Körperstimmulationen. Die neurologische
                  Stress-Verarbeitung im Gehirn wird hierbei unterstützt.
                </p>
                <p>
                  So einfach die Methode schein, sie ist als Stress-Werkzeug
                  äußerst wirkungsvoll. Wenn Sie damit kein Trauma, sondern
                  ihren Alltagsstress loslassen wollen, unterstützt Sie diese
                  Technik sehr elegant.
                </p>
                <p>
                  Auch zum Ressourcen aufspüren, oder einfach um das Denken und
                  Fühlen wieder anzukurbeln, ist EMDR ideal.
                </p>
                <p style={{ fontWeight: "600" }}>
                  <a href="https://www.wingwave.com/coaching/was-ist-wingwave.html">
                    www.wingwave.com/coaching/was-ist-wingwave
                  </a>
                </p>
                <p>
                  Ich verwende diese Methode bei mir in der Praxis für Coaching
                  und körperliches Entspannungs-Training.
                </p>
                <p>
                  <b>
                    WENN SIE EMDR IM RAHMEN EINER PSYCHOTHERAPIE ERLEBEN WOLLEN;
                    WENDEN SIE SICH BITTE AN EINEN AUSGEBILDETETN
                    PSYCHOTHERAPEUTEN!!
                  </b>
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

export default EMDR_Coaching
