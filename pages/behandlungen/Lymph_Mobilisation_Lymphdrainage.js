import React from "react";
import Image from "next/image";
import Link from "next/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container  from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { vl, heading, inhaltBehandlung } from "../../scss/styles.module.scss";
import SideMenue from "../../components/SideMenue";
import MobileSideMenue from "../../components/MobileSideMenue";

// export const config = { amp: 'hybrid' }

const Lymph_Mobilisation_Lymphdrainage = () => {

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
                <h1
                  style={{ position: "absolute", zIndex: "2" }}
                  className={`d-flex align-items-center ${heading}`}>                
                   Lymph-Mobilisation/ Lymphdrainage
                </h1>
            </Col>
          </Row>
        </Container>
        <Image
          src="/img/Header_Bild_Rot.jpg"
          layout="fill"
          objectFit="cover"
          width={1920}
          height={420}
          quality="10"
        />
      </section>
      <section>
        <Container>
          <Row>
            {/* Sitemenue */}
            <Col md={4} className="d-none d-sm-block">                            
                            <SideMenue />                            
                        </Col>
                        {/* Main Content */}
                        <Col
                            md={1}
                            className={`d-none d-sm-block ${vl}`}
                            style={{ color: "black" }}                
                        >
                        </Col>
            <Col md={7}>
              <div className={inhaltBehandlung}>
                <h2 className="mx-auto">Lymph-Mobilisation/ Lymphdrainage</h2>

                <br />
                <p>
                  Diese spezielle Lymph-Mobilisation am Periost
                  (Knochenhaut)-Fußreflexzonen ist eine gute Alternative zur
                  klassischen Lymphdrainage.
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

export default Lymph_Mobilisation_Lymphdrainage
