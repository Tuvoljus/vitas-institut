import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import HeaderPicture from "../components/HeaderPicture";

const Impressum = () => {
  return (
    <>
      {/* <HeaderPicture text="Datenschutzerklärung" /> */}
      <section>
        <Container>
            <Row>
                <Col>
                    <h1>Impressum</h1><br/>
                </Col>
            </Row>
          <Row>
            <Col md={2}></Col>
            <Col>
                <h5>
                Angaben gemäß § 5 TMG
                </h5>
              <p>
              Bernhard Käser<br/>
              Oberanger 42<br/>
              80331 München
              </p>
              <h5>
                Kontakt
                </h5>
              <p>
                  Email: bk@vitas-institut.de<br />
                  Telefon: 089 - 23 23 06 70<br />
                  Internet: http://www.vitas-institut.de
              </p>
              <h5>Steuernummer</h5>
              <p>StNr 145/108/70566</p>
              <h5>
              Webdesign/Konzeption/Umsetzung:
              </h5>
              <p>
              Webdesign: Alexander Keil<br />
              Webentwicklung &amp; Hosting: Web-Metropolis | Alexander Keil
              </p>
              <h5>
              Haftung für Inhalte
              </h5>
              <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
              <h5>
              Haftung für Links
              </h5>
              <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Impressum;
