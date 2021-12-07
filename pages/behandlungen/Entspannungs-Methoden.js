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

import dynamic from 'next/dynamic'
const HeaderPicture = dynamic(() => import('../../components/HeaderPicture'))

const Entspannungs_Methoden = () => {

  return (
    <>
      <HeaderPicture text="Ruhe finden"/>
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
                  immer ein &#8222;Forschungsschwerpunkt&#8220; von mir gewesen.
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
                  Entspannung. Schnelle Wege zur Ruhe sind auch
                  &ldquo;Notfallhilfen&ldquo;. Daher bekommen Sie bewährte,
                  überprüfte Techniken an die Hand. Sie erzeugen in wenigen
                  Minuten körperliche und seelische Beruhigung. Sie wählen aus,
                  was zu Ihnen passt. Was bringt spürbar den größten Nutzen für
                  Sie.
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
