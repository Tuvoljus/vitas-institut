import React from "react";
import Image from "next/image";
import Link from "next/link"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container  from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { vl, heading, inhaltBehandlung, imageDropShadow } from "../../scss/styles.module.scss";
import SideMenue from "../../components/SideMenue";
import MobileSideMenue from "../../components/MobileSideMenue";

import dynamic from 'next/dynamic'
const HeaderPicture = dynamic(() => import('../../components/HeaderPicture'))

const Stressreduktion_EFT = () => {  
  return (
    <>
      <HeaderPicture text="Stressreduktion mit EFT" />
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
                <h2 className="mx-auto">Stressreduktion mit EFT</h2>

                <br />
                <p>
                  MFT, EFT, MET, BSFF, WWT, ED x TM, NEAM, TFT, TAT, E.T.T,
                  Energy EFT, sind alles sehr ähnliche Verfahren der
                  &ldquo;energetischen Psychologie&ldquo;. Sie dienen der
                  Auflösung von Energie-Blockaden. Körperlicher oder emotionaler
                  Stress bedeutet im Körper messbar immer ein Energie-Problem.
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
                  Die &ldquo;energetische Psychologie&ldquo; kann einzeln oder
                  kombiniert werden. Auch in Verbindung mit anderen Methoden,
                  ist sie als Selbstbehandlungs-Instrument ausgezeichnet.
                </p>
                <p>
                  Das sanfte Klopfen, bzw. nur Berühren der Punkte, unterstützt
                  den Körper. Während wir gemeinsam für Ihr Streßthema relevante
                  Sätze aussprechen, wird die gesamte Körperenergie gestützt.
                  Die vorher automatisch ablaufende Körperreaktion (Schwitzen,
                  Rotwerden, Unruhe, Muskelanspannung, Atemstockung) wird vom
                  Gedanken an das Problem &#8222;entkoppelt&#8220;. Mit
                  beruhigtem Körper denken Sie danach ganz neutral an das Thema.
                </p>
                <p>
                  Eine wesentliche Arbeit hierbei ist das Entkräften der
                  sogenannten &#8222;Psychischen Umkehrung&#8220; - ein
                  Selbstsabotageprogramm, das sich häufig in verborgenen
                  &#8222;Glaubens&#8220;sätzen zeigt. Wir können etwas nicht
                  verändern, solange wir es nicht akzeptieren.
                </p>
                <p>
                  Eine &ldquo;psychische bzw. energetische&ldquo; Umkehrung
                  hindert uns daran, Lösungen zu erkennen. Selbst wenn wir das
                  Wissen dazu haben, verhindert sie, daß wir eine Lösung
                  umsetzen.
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
                  warum oder woher Sie es haben. Mit &ldquo;energetischer
                  Psychologie&ldquo; können ganz grundsätzlich Harmonisierungen
                  des Körperenergieflusses hergestellt werden. Energieblockaden
                  lösen sich, die mit diesen Beschwerden einhergehen.
                </p>
                <p>
                  {" "}
                  Die Methoden der &ldquo;energetischen Psychologie&ldquo; haben
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
                    <li>Lese-Schreibschwäche; Dyslexie, Dyskalkulie etc.</li>
                    <br />
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
