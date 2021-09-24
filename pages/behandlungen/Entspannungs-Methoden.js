import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Container } from "react-bootstrap";

import { vl } from "../../scss/styles.module.scss";
import SideMenue from "../../components/SideMenue";
import MobileSideMenue from "../../components/MobileSideMenue";

// export const config = { amp: 'hybrid' }

const Entspannungs_Methoden = () => {

  return (
    <>
      <div>
        <Container>
          <Row
            style={{ position: "absolute", zIndex: "2" }}
            className="align-self-center"
          >
            <h1>
              Ruhe finden/Entspannungstechniken/ Entspannungsmethoden lernen
            </h1>
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
                <h2 className="mx-auto">
                  Ruhe finden/Entspannungstechniken/ Entspannungsmethoden lernen
                </h2>
                <div className="lead">
                  alle Techniken ausführlich unter{" "}
                  <b>
                    <a href="https://www.vitas-stressmanagement.de/">
                      www.vitas-stressmanagement.de
                    </a>
                  </b>
                </div>
                <br />
                <p>
                  Seit 1978 sind Entspannungstechniken, Entspannungsmethoden
                  immer ein „Forschungsschwerpunkt" von mir gewesen.
                </p>
                <p>
                  <b>
                    Entspannungs-Methoden, die Sie minuten-, oder sogar nur
                    sekundenweise anwenden. Überall und unauffällig in Ihrem
                    Alltag {">"} schnelle Wege zur Ruhe. Entspannungstechniken
                    lernen in München. Ruhe finden.
                  </b>
                </p>
                <p>
                  Sie haben im Alltag meist keine 20 Minuten Zeit zur
                  Entspannung. Schnelle Wege zur Ruhe sind auch "Notfallhilfen".
                  Daher bekommen Sie bewährte, überprüfte Techniken an die Hand.
                  Sie erzeugen in wenigen Minuten körperliche und seelische
                  Beruhigung. Sie wählen aus, was zu Ihnen passt. Was bringt
                  spürbar den größten Nutzen für Sie.
                </p>
                <p>
                  <b>
                    Die Selbsthilfen sind fast überall minuten-oder sogar nur
                    sekundenweise durchführbar. Entspannungs-Methoden lernen in
                    München! Ruhe finden in sich!
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

export default Entspannungs_Methoden
