import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Container } from "react-bootstrap";

import { vl } from "../../scss/styles.module.scss";
import SideMenue from "../../components/SideMenue";
import MobileSideMenue from "../../components/MobileSideMenue";

// export const config = { amp: 'hybrid' }

const Atemtherapie_der_befreite_Atem = () => {

  return (
    <>
      <div>
        <Container>
          <Row
            style={{ position: "absolute", zIndex: "2" }}
            className="align-self-center"
          >
            <h1>Atemtherapie</h1>
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
                <h2 className="mx-auto">Atemtherapie</h2>
                <div className="lead">der befreite Atem</div>
                <br />
                <p>
                  <b>
                    Unser Atem reagiert auf ALLES, was uns innerlich und
                    äußerlich bewegt.
                  </b>{" "}
                  <br />
                  Dies drücken wir auch in der Sprache aus: Atemlos,
                  atemberaubend, langer Atem, Verschnaufpause, dicke Luft,
                  runterpressen, mühsam rauspressen, tiefe Seufzer der
                  Erleichterung.
                </p>
                <p>
                  Dr. Buteyko und Prof. Frolov haben die Atemtechnik
                  revolutioniert und damit für viele andere Erkrankungen neben
                  Asthma einen Meilenstein in der Medizin gesetzt.
                </p>
                <p>
                  Konsequente Nasenatmung und langsame und ganz geringe Atemzüge
                  mit kaum wahrnehmbarer Bewegung im Bauch ist der ideale
                  Ruheatem.
                </p>
                <p style={{ fontWeight: "600" }}>
                  <a href="http://www.atmosana-schule.de/">
                    www.atmosana-schule.de/
                  </a>
                </p>
                <p>
                  Mit den Techniken der <b>klassischen Atemtherapie</b>{" "}
                  (Dehnlagen, Drainagelagerung, Hustentechniken, Lippenbremse,
                  atemerleichternde Stellungen, Atem-Massage) werden
                  Atemerkrankungen wie z.B. Bronchitis, Asthma, behandelt.
                </p>
                <p>
                  Beim <b> &quot;befreiten Atem&quot;</b> geht es um eine
                  bessere Körperwahrnehmung, tiefe körperliche und psychische
                  Entspannung. Meine Hände sind mit Ihrem Körper im
                  &bdquo;Gespräch&rdquo;. Durch die Berührung können
                  Muskel-verspannungen, Atem und Emotionen gelöst werden. Auf
                  diese Weise ist ein tieferer Zugang zu sich selbst möglich.
                </p>
                <p>
                  Viele Emotionen sind in unserem &bdquo;Muskelpanzer&rdquo;
                  eingefroren. Gelegentliche tiefe Seufzer der Erleichterung
                  oder auch ein paar unwillkürliche Tränen lockern diesen
                  &bdquo;Panzer&rdquo;. Seelische Schmerzen, Ängste und Trauer,
                  das große Thema der mangelnden Eigenliebe, drücken sich in
                  Körperhaltung, Atem- und Bewegungsmustern aus.
                </p>
                <p>
                  Durch die aufmerksame Beobachtung und die achtsame Berührung,
                  die immer im engen Kontakt mit dem vielschichtigen
                  Atemgeschehen einhergeht, dürfen Körper und Seele genesen.
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

export default Atemtherapie_der_befreite_Atem
