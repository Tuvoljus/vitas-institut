import React from 'react'

import { useAmp } from 'next/amp'

import { ColorFont, vlQualification, ColorListStyle } from '../scss/styles.module.scss'


export const config = { amp: 'hybrid' }

const SectionQualification = () => {    
    return (
      <>
        <div className={ColorFont}>
          <div className="container text-center">
            <h1 className="small-heading">Über mich</h1>
          </div>
          <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-md-2">
                <h3>Qualifikation:</h3>
              </div>
              <div                
                className={`col-md-2 d-none d-sm-block ${vlQualification}`}
              ></div>
              <div
                className="col-md-8"
                style={{ paddingLeft: "5rem", fontSize: "1.2em" }}
              >
                <ul className={`list-group list-group-flush ${ColorFont}`}>
                    <li className="list-group-item">Masseur med. Bademeister (1980)</li>
                    <li className="list-group-item">Dipl. Physiotherapeut (1985)</li>
                    <li className="list-group-item">Unternehmensberater (1992)</li>
                    <li className="list-group-item">Trainer (1992)</li>
                    <li className="list-group-item">Schmerztherapeut (1995)</li>
                    <li className="list-group-item">NLP Master Practititoner (1995)</li>
                    <li className="list-group-item">EMDR, EFT, Körperzentrierte-Therapie (2005)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default SectionQualification