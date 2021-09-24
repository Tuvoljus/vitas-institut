import React from "react";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Container } from "react-bootstrap";

import { vl } from "../../scss/styles.module.scss";
import SideMenue from "../../components/SideMenue";
import MobileSideMenue from "../../components/MobileSideMenue";

// export const config = { amp: 'hybrid' }

const Stressreduktion_EFT = () => {
  
  return (
    <>
      <div>
        <Container>
          <Row
            style={{ position: "absolute", zIndex: "2" }}
            className="align-self-center"
          >
            <h1>Stressreduktion mit EFT</h1>
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
                <h2 className="mx-auto">Stressreduktion mit EFT</h2>

                <br />
                <p>
                  MFT, EFT, MET, BSFF, WWT, ED x TM, NEAM, TFT, TAT, E.T.T,
                  Energy EFT, sind alles sehr ähnliche Verfahren der
                  "energetischen Psychologie". Sie dienen der Auflösung von
                  Energie-Blockaden. Körperlicher oder emotionaler Stress
                  bedeutet im Körper messbar immer ein Energie-Problem.
                </p>
                <p>
                  Jeder kann diese Methoden erlernen und an sich selbst und
                  anderen ausführen. Sie gehören in die{" "}
                  <b>emotionale Hausapotheke</b> für jedermann. Berühren oder
                  sanftes Klopfen von Akupunkturpunkten ist dabei der
                  körperliche Aspekt.
                </p>
                <p>
                  MFT MentalFeldTechnik von Dr. med. Klinghardt ist in meinen
                  Augen die gründlichste aller Klopfarten. Neben der
                  Klopfakupressur gibt es bei diesem System noch eine Reihe
                  weiterer hervorragender Techniken!!
                </p>
                <p>
                  EFT stammt aus Amerika und wurde von Gary Graig entwickelt.{" "}
                  <a href="https://www.eft-info.com/">www.official-eft.de</a>{" "}
                  MET ist der von Rainer Franke in Europa verwendete Begriff für
                  EFT. ED xTM und NEAM stammen von Fred Gallo, der zu Beginn der
                  energetischen Psychologie die wesentlichen Impulse gab.
                </p>
                <p>
                  BSFF (Dr. Larry Nims), eine Weiterentwicklung von EFT, ohne
                  Klopfen von Akupunkturpunkten, ist eine ideale Ergänzung und
                  Erweiterung.
                </p>
                <p>
                  BSFF entfernt auf einfache und sanfte Weise belastende
                  Emotionen, Erfahrungen, Verhaltens- und Denkweisen. Es
                  beruhigt einschränkende Glaubenssätze, die Probleme auslösen.
                  Genaues fühlen, exakte Beschreibung der Situation, die Sie
                  ändern wollen ist notwendig. Dann können Sie mit einer
                  gewissen Ausdauer gute Ergebnisse erzielen.
                </p>
                <p>
                  Ramona Wagner hat sich das BSFF vorgenommen und in der
                  Anwendung nochmal deutlich vereinfacht. Sie nennt ihre
                  Weiterentwicklung WWT (Wunderworttechnik)
                </p>
                <p>
                  Mit WWT und MFT können wir klarer zu Entscheidungen kommen.{" "}
                  <b>
                    Es ermöglicht uns den Übergang von (automatischem) Reagieren
                    zu (aktivem) Agieren.
                  </b>
                </p>
                <p>
                  Die energetischen Methoden machen{" "}
                  <b>keine Heilversprechungen</b>. Die Methoden ergänzen Arzt
                  und Therapeut. EFT/ BSFF behandeln psychologisch- seelische
                  Probleme, keine medizinischen. Viele körperlichen
                  Schwierigkeiten werden emotional, seelisch verursacht. Bei der
                  Behandlung solcher Probleme können sich energetische Methoden
                  als <b>sehr wirkungsvolle Instrumente</b> erweisen.{" "}
                </p>
                <p>
                  Die "energetische Psychologie" kann einzeln oder kombiniert
                  werden. Auch in Verbindung mit anderen Methoden, ist sie als
                  Selbstbehandlungs-Instrument ausgezeichnet.
                </p>
                <p>
                  Das sanfte Klopfen, bzw. nur Berühren der Punkte, unterstützt
                  den Körper. Während wir gemeinsam für Ihr Streßthema relevante
                  Sätze aussprechen, wird die gesamte Körperenergie gestützt.
                  Die vorher automatisch ablaufende Körperreaktion (Schwitzen,
                  Rotwerden, Unruhe, Muskelanspannung, Atemstockung) wird vom
                  Gedanken an das Problem „entkoppelt". Mit beruhigtem Körper
                  denken Sie danach ganz neutral an das Thema.
                </p>
                <p>
                  Eine wesentliche Arbeit hierbei ist das Entkräften der
                  sogenannten „Psychischen Umkehrung" - ein
                  Selbstsabotageprogramm, das sich häufig in verborgenen
                  „Glaubens"sätzen zeigt. Wir können etwas nicht verändern,
                  solange wir es nicht akzeptieren.
                </p>
                <p>
                  Eine "psychische bzw. energetische" Umkehrung hindert uns
                  daran, Lösungen zu erkennen. Selbst wenn wir das Wissen dazu
                  haben, verhindert sie, daß wir eine Lösung umsetzen.
                </p>
                <p>
                  Typische unterbewußte Programme lauten:
                  <br />
                  <ul style={{ listStyleType: "-" }}>
                    <li>
                      ich glaube nicht, daß mir diese einfache Methode helfen
                      kann
                    </li>
                    <li>
                      ich glaube nicht, dieses Problem jemals zu überwinden
                    </li>
                    <li>
                      ich habe es nicht verdient, dieses Problem zu überwinden
                    </li>
                    <li>
                      ich habe nicht die Kraft, dieses Problem zu überwinden
                    </li>
                    <li>ich glaube nicht, mein Ziel zu erreichen</li>
                    <li>ich habe Angst davor, erfolgreich zu sein</li>
                    <li>ich glaube nicht daran, mich ändern zu können</li>
                    <li>ich kann meine Sicherheit nicht aufgeben</li>
                  </ul>
                </p>
                <p>
                  Einer der interessantesten Aspekte bei EFT ist, dass Sie, um
                  ein Problem lösen zu können, nicht zu verstehen brauchen,
                  warum oder woher Sie es haben. Mit "energetischer Psychologie"
                  können ganz grundsätzlich Harmonisierungen des
                  Körperenergieflusses hergestellt werden. Energieblockaden
                  lösen sich, die mit diesen Beschwerden einhergehen.
                </p>
                <p>
                  {" "}
                  Die Methoden der "energetischen Psychologie" haben
                  nachweislich geholfen bei:
                  <ul>
                    <li>Ängsten</li>
                    <li>Phobien</li>
                    <li>Inneren Blockaden</li>
                    <li>Zwangsvorstellungen</li>
                    <li>Zwangsstörungen</li>
                    <li>Essstörungen</li>
                    <li>Süchten aller Art</li>
                    <li>Chronischer Müdigkeit</li>
                    <li>Depressionen</li>
                    <li>Traumata</li>
                    <li>Posttraumatischem Stresssyndrom PTSD</li>
                    <li>Körperlichen Schmerzen</li>
                    <li>Funktionellen Beschwerden der Organe</li>
                    <li>Blutdruckproblemen</li>
                    <li>Allergien</li>
                    <li>Astma</li>
                    <li>Phantomschmerzen</li>
                    <li>Migräne</li>
                    <li>Stress</li>
                    <li>Hyperaktivität</li>
                    <li>Stoffwechselstörungen</li>
                    <li>
                      Leistungs- und Erfolgsblockaden (Schule, Beruf, Sport,
                      Hobby)
                    </li>
                    <li>Lese-Schreibschwäche; Dyslexie, Dyskalkulie etc.</li><br/>
                    Emotionalen Konflikten wie:
                    <li>Ärger</li>
                    <li>Wut</li>
                    <li>Schuldgefühlen</li>
                    <li>Schamgefühlen</li>
                    <li>Eifersucht</li>
                    <br />
                    <li>Liebeskummer</li>
                    <li>Traurigkeit</li>
                    <li>Verzweiflung</li>
                    <li>Enttäuschung</li>
                  </ul>
                </p>
                <p>
                  <b>
                    Ich verwende diese Techniken bei mir in der Praxis für
                    Coaching und körperliches Entspannungstraining.
                  </b>
                </p>
                <p>
                  <b>
                    WENN SIE DIESE METHODE IM RAHMEN EINER PSYCHOTHERAPIE
                    ERLEBEN WOLLEN, WENDEN SIE SICH BITTE AN EINEN
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

export default Stressreduktion_EFT
