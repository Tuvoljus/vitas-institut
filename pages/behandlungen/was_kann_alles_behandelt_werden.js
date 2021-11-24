import React from 'react'
import Image from 'next/image'
import Link from "next/link"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container  from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


import { BsPlus } from "@react-icons/all-files/bs/BsPlus"
import { iconStyle } from '../../scss/Icons.module.scss'

import { vl, heading, inhaltBehandlung } from '../../scss/styles.module.scss'
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';


// export const config = { amp: 'hybrid' }

const was_kann_behandelt_werden = () => {   


    return (
      <>
        <section>
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <h1
                  style={{ position: "absolute", zIndex: "2", textShadow: '-.5px 1px 4px #9e9e9e'}}
                  className={`d-flex align-items-center ${heading}`}
                >
                  Was kann behandelt werden?
                </h1>
              </Col>
            </Row>
          </Container>
          <Image
            src="/img/Header_Bild_Rot.jpg"
            layout="fill"
            objectFit="cover"            
            quality="100"
          />
        </section>
        <section >
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
            ></Col>
              <Col md={7}>
                <div className={inhaltBehandlung}>
                  <h2 className="mx-auto">
                    Was kann behandelt werden?
                    <br />
                    Indikationen
                  </h2>

                  <div className="lead">Behandlungen folgender Beschwerden</div>
                  <br />
                  <div className="lead">
                    Der Bereich von Gelenken, Muskulatur, Bindegewebe
                  </div>
                  <br />
                  <div
                    style={{
                      listStyle: "none",
                      lineHeight: "2.5rem",
                      fontSize: "18px",
                    }}
                  >
                    <li>
                      <BsPlus className={iconStyle} /> Arthrose
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Karpaltunnelsyndrom
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Schmerzen der Wirbelsäule
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Chronische Schmerzen
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Chronische Ischialgie
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Kopfschmerzen; Migräne
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Chronische Sinusitis
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> nach Herzinfarkt
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> einige Arten von Asthma
                      bronchiale
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> chronische Bronchitis
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Gastritis, Kolitis
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Menstruationsbeschwerden
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Ovarialzysten
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Chronische
                      Blasenentzündung
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Prostatabeschwerden
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Schlecht heilende Brüche
                    </li>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <MobileSideMenue />
      </>
    );
}

export default was_kann_behandelt_werden