import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { Container } from "react-bootstrap";

import { vl } from "../../scss/styles.module.scss";
import SideMenue from "../../components/SideMenue";
import MobileSideMenue from "../../components/MobileSideMenue";

// export const config = { amp: 'hybrid' }

const Scenar_Therapie = () => {

  return (
    <>
      <div>
        <Container>
          <Row
            style={{ position: "absolute", zIndex: "2" }}
            className="align-self-center"
          >
            <h1>Scenar-Therapie</h1>
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
                <h2 className="mx-auto">S.c.e.n.a.r-Therapie DENAS Therapie</h2>

                <br />
                <p>
                  Das S.c.e.n.a.r ist ein für das russische Weltraumprogramm
                  entwickeltes Elektrotherapiegerät. Die gesundheitliche
                  Verfassung der Kosmonauten während ihres Weltraumaufenthalts
                  wurde damit unterstützt.
                </p>
                <p>
                  <b>Bei mir in der Praxis verwende ich das Denas-Gerät.</b>
                </p>
                <p>
                  Denas-Therapie (DENS-Gerät)
                  dynamische-elektro-neuro-stimmulation beruht auf dem gleichen
                  Prinzip mit einem Vegetativ-Programm.
                </p>
                <p>
                  Seit über 20 Jahren wird es von Ärzten in Kliniken und in
                  Praxen angewandt. Es ist u.a. für die Behandlung von akuten
                  und chronischen Schmerzen geeignet. Durch die elektrischen
                  Impulse werden spezifische Schmerzleitungsfasern des
                  Nevensystems stimmuliert (C-Fasern). Hierbei werden im
                  zentralen Nevensystem körpereigene opioide Proteine
                  freigesetzt, die den Schmerz dämpfen.
                </p>
                <p>
                  Während der Behandlung wird von dem Gerät der Hautwiderstand
                  gemessen. Anhand dessen Veränderung werden Impulsstärke,
                  Impulsdauer und Impulsfrequenz moduliert. Auf diese Weise ist
                  gewährleistet, dass die spezifischen Schmerzleitungsfasern
                  durch unterschiedliche, individuell dosierte Impulse
                  stimuliert werden. Diese Besonderheit gab dem
                  Therapieverfahren auch seinen Namen:
                </p>
                <p><b>S</b>elf-<b>c</b>ontrolled <b>e</b>nergo-<b>n</b>euro-<b>a</b>daptive <b>r</b>egulation</p>
                <p>
                  Über 50 000 dokumentierte Fälle. Große Zentren sind in Kanada,
                  Holland und England.
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

export default Scenar_Therapie
