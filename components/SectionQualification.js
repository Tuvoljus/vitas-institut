import React from 'react';
import Image from 'next/image';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { data } from './JsonData/data';

import { useAmp } from 'next/amp';

import { ColorFont, vlQualification } from '../scss/styles.module.scss';

export const config = { amp: 'hybrid' };

const SectionQualification = () => {
  const isAmp = useAmp();

  function MouseOver(event) {
    event.target.style.background = 'rgba(160,213,225,.3)';
  }

  function MouseOut(event) {
    event.target.style.background = '';
  }
  return (
    <>
      <div className={ColorFont}>
        <div className="container text-center">
          <h1 className="small-heading">Physiotherapie am Sendlinger Tor</h1>
        </div>
        <div className="container" style={{ marginTop: '3rem' }}>
          <div className="row">
            <div className="col-md-2">
              <h3>Qualifikation</h3>
            </div>
            <div
              className={`col-md-1 d-none d-sm-block ${vlQualification}`}
            ></div>
            <div
              className="col-md-4"
              style={{ paddingLeft: '1rem', fontSize: '1.2em' }}
            >
              <ul className={`list-group list-group-flush ${ColorFont}`}>
                <li className="list-group-item">
                  Masseur med. Bademeister (1980)
                </li>
                <li className="list-group-item">
                  Dipl. Physiotherapeut (1985)
                </li>
                <li className="list-group-item">Unternehmensberater (1992)</li>
                <li className="list-group-item">Trainer (1992)</li>
                <li className="list-group-item">Schmerztherapeut (1995)</li>
                <li className="list-group-item">
                  NLP Master Practititoner (1995)
                </li>
                <li className="list-group-item">
                  EMDR, EFT, Körperzentrierte-Therapie (2005)
                </li>
              </ul>
            </div>
            <div className="col-md-5">
              {isAmp ? (
                <amp-img
                  layout="responsive"
                  width="1024"
                  height="768"
                  src="img/Physiotherapeut_Altstadt_Bernhard_Käser.jpg"
                  alt="Physiotherapeut Altstadt"
                />
              ) : (
                <div>
                  <Image
                    src="/img_webp/Physiotherapeut_Altstadt_Bernhard_Käser.webp"
                    layout="responsive"
                    width={1024}
                    height={768}
                    objectFit="cover"
                    quality="100"
                    alt="HeaderImage Bernhard Käser"
                    priority="100"
                  />
                </div>
              )}
            </div>
          </div>
          {/* Weitere Qualifikationen */}
          <div className="row">
            <div className="col-md-2">
              <h3> Weitere Qualifikationen</h3>
            </div>
            <div
              className={`col-md-1 d-none d-sm-block ${vlQualification}`}
            ></div>
            <div
              className="col-md-8"
              style={{ paddingLeft: '1rem', fontSize: '1.2em' }}
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item style={{ marginLeft: '-18px' }}>
                  <Accordion.Header
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                  >
                    <h5 style={{ pointerEvents: 'none' }}>
                      Weitere Aus- und Weiterbildungen
                    </h5>
                  </Accordion.Header>
                  <Accordion.Body style={{ pointerEvents: 'none' }}>
                    <ul className={`list-group list-group-flush ${ColorFont}`}>
                      {data.weitereQualifikationen.map((item) => {
                        return (
                          <li key={item.id} className="list-group-item">
                            {item.li}
                          </li>
                        );
                      })}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron"></div>
    </>
  );
};

export default SectionQualification;
