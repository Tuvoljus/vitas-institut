import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import { vl, heading, inhaltBehandlung } from '../../scss/styles.module.scss';
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';

import dynamic from 'next/dynamic';
import { useAmp } from 'next/amp';
import Head from 'next/head';
const HeaderPicture = dynamic(() => import('../../components/HeaderPicture'));

// export const config = { amp: 'hybrid' }

const Katzenschnurr_Prinzip = () => {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>Katzenschnurr-Prinzip</title>
      </Head>
      <HeaderPicture text="EMDR-Coaching" />
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
              style={{ color: 'black' }}
            ></Col>
            <Col md={7}>
              <div className={inhaltBehandlung}>
                <h2 className="mx-auto">
                  PST 2010 <br />
                  Behandlung nach dem Katzenschnurr-Prinzip
                </h2>
                <br />
                <p>
                  <strong>
                    Katzenschnurren heilt!- Rückenschmerz und Co -eine
                    evolutionsoptimierte Methode zur Gesundheitsoptimierung.
                  </strong>
                </p>
                <p>
                  Diese ungewöhnliche Erkenntnis beweist ein Grazer
                  Forschungsprojekt und entwickelte daraus eine ungewöhnliche
                  Behandlungsmethode. Die Katze schnurrt, um für die tägliche
                  Jagd fit zu bleiben. -Schnurrende Katzen bekommen keine
                  Arthrosen.
                </p>
                <p>
                  Der Mensch kann heute nutzen, was die Natur seit Millionen von
                  Jahren eingerichtet hat. Bestimmte Frequenzbänder des
                  Schnurrens bewirken eine Schmerzlinderung und sogar Heilung
                  nach wenigen Therapien.
                </p>
                <p>
                  {' '}
                  Katzenschnurren als Heilmittel? - Ja, es ist bewiesen, dass
                  Katzen sehr widerstandsfähig sind und bei Krankheiten sowie
                  Unfallfolgen über Selbstheilungskräfte verfügen. Zahlreiche
                  Studien verweisen auf die Heilkraft des Katzenschnurrens. Die
                  besondere Vielfalt des Katzen- Frequenzspektrum unterstützt
                  die Heilung in der Humanmedizin.
                </p>
                <p>
                  {' '}
                  Mit dem Katzenschnurr-Therapiegerät KST-2010 ist es möglich,
                  diese eine einfache Weise zu Nutzen.
                </p>
                <p>
                  <strong>
                    Die Katzenschnurr® Methode verbessert die Lungenfunktion.
                    Befreite Atemwege bei Asthma, Bronchitis und COPD.
                  </strong>
                </p>
                <p>
                  Die Einsatzmöglchkeiten sind sehr umfangreich und kann unter
                  anderem bei folgenden Symptomatiken angewendet werden.
                </p>
                <p>
                  - Muskel-, Gelenksbeschwerden und Knochendefizit, im Bereich
                  des gesamten Stütz- und Bewegungsapparates. z.B.: Schmerzende
                  Gelenke, Brustwirbelsäule, Bandscheibenbeschwerden,
                  schmerzendes Becken und Muskelverspannungen. Schulter-,
                  Ellenbogen-, Handgelenks-, Hüftgelenk-, Kniegelenk-, und
                  Sprunggelenksbeschwerden. Arthrotische Gelenke und
                  Wirbelsäulen können sehr gut behandelt werden. Knochenbrüche
                  heilen schneller. Bei Osteoporose (Knochenschwund), wird der
                  Knochenaufbau gefördert und Sehnenscheidenentzündungen heilen
                  schneller.
                </p>
                <p>
                  - Herzmuskel-, Lungen-, Atemwegserkrankungen, Migräne, Asthma
                  und Diabetes. - Die allgemeine Durchblutung reagiert merklich
                  positiv. Bei allgemeinem Unbehagen löst das Schnurren
                  Blockaden im Körper und aktiviert wieder den Energiefluss. Der
                  Stoffwechsel verbessert sich, – auch nervlich hervorgerufene
                  Hauterkrankungen werden positiv beeinflusst.
                </p>

                <p>
                  Durch den Einsatz des KST-2010 konnten nicht nur
                  Schmerzlinderung und Heilung beobachtet werden, sondern auch
                  die Heilungsdauer erheblich verkürzt werden. Ein weiterer
                  positiver Effekt ist eine Reduzierung der Medikamenteneinnahme
                  bis hin zur vollständigen Absetzung.
                </p>
                <p>
                  Das Schnurrgerät wird auch erfolgreich bei jungen Menschen mit
                  Rückenschmerzen eingesetzt und dient bei Hobbysportlern und
                  Leistungssportlern zur Vitalisierung der Muskulatur und des
                  Kreislaufsystems. –(Es steht nicht auf der Doping
                  Verbotsliste.)
                </p>
                <p>
                  Das KST-2010, in Verwendung im PKW, LKW oder im Flugzeug, -bei
                  Langstreckenflügen, kann Kreuzschmerzen lindern.
                </p>
                <p>
                  Es kann aber auch zur einfachen Entspannungs-Therapie
                  angewendet werden.
                </p>
                {isAmp ? (
                  <amp-img
                    layout="responsive"
                    width="800"
                    height="600"
                    src="/img_webp/Katzenschnurr-Therapiegerät KST-2010.webp"
                    alt="Therapiegerät KST-2010 - Physiopraxis"
                  />
                ) : (
                  <Image
                    className="rounded-3"
                    src="/img_avif/Katzenschnurr-Therapiegerät KST-2010.avif"
                    layout="responsive"
                    width={800}
                    height={600}
                    quality="10"
                    alt="Therapiegerät KST-2010 - Physiopraxis"
                  />
                )}
                <p></p>
                {isAmp ? (
                  <amp-img
                    layout="responsive"
                    width="800"
                    height="600"
                    src="/img_webp/Katzenschnurr-Behandlung.webp"
                    alt="Katzenschnurr Behandlung - Physiopraxis"
                  />
                ) : (
                  <Image
                    className="rounded-3"
                    src="/img_avif/Katzenschnurr-Behandlung.avif"
                    layout="responsive"
                    width={800}
                    height={600}
                    quality="10"
                    alt="Katzenschnurr Behandlung - Physiopraxis"
                  />
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <MobileSideMenue />
    </>
  );
};

export default Katzenschnurr_Prinzip;
