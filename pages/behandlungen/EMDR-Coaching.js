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
import MobileSideMenue from "../../components/MobileSideMenue"

import dynamic from 'next/dynamic'
const HeaderPicture = dynamic(() => import('../../components/HeaderPicture'))

// export const config = { amp: 'hybrid' }

const EMDR_Coaching = () => {

  return (
    <>      
      <HeaderPicture text="EMDR-Coaching"/>
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
