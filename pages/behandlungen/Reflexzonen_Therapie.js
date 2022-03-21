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
import Head from "next/head";
const HeaderPicture = dynamic(() => import('../../components/HeaderPicture'))


const Reflexzonen_Therapie = () => {
  return (
    <>      
    <Head>
    <title>Physiopraxis - Reflexzonen Therapie</title>
    </Head>
      <HeaderPicture text="Reflexzonen-Therapie" />
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
                <h2 className="mx-auto">Reflexzonen-Therapie</h2>

                <br />
                <p>
                  Die Behandlung am &#8222;Mikroystem&#8220; Fuß ist die älteste
                  und bekannteste Methode erfolgreicher Reflexzonen-Therapie.
                  Die peripheren Nervenenden befinden sich hauptsächlich im
                  Fuß-, Hand-, Ohr- und Kopfbereich. In diesen Bereichen ist der
                  ganze Körper mit all seinen Organen und Körperteilen
                  abgebildet. Diese Abbildung finden wir ferner in einem Teil
                  der Großhi rnrinde wieder.
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
