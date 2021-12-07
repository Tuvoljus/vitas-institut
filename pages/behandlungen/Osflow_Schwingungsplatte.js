import React from "react";
import Image from "next/image";
import Link from "next/link"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container  from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { vl, heading, inhaltBehandlung } from "../../scss/styles.module.scss";
import SideMenue from "../../components/SideMenue";
import MobileSideMenue from "../../components/MobileSideMenue";

import dynamic from 'next/dynamic'
const HeaderPicture = dynamic(() => import('../../components/HeaderPicture'))

// export const config = { amp: 'hybrid' }

const Osflow_Schwingungsplatte = () => {

  return (
    <>      
      <HeaderPicture text="Osflow Schwingungsplatte" />
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
