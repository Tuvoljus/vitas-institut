import React from 'react'
import Image from 'next/image'

import { useAmp } from 'next/amp'

import { ColorFont, vlQualification, ColorListStyle } from '../scss/styles.module.scss'


export const config = { amp: 'hybrid' }

const SectionWegpunkte = () => {
  const isAmp = useAmp();    
    return (
      <>
        <div className={ColorFont}>
          <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-md-2">
                <h3>Wegpunkte</h3>
              </div>
              <div                
                className={`col-md-1 d-none d-sm-block ${vlQualification}`}
              ></div>
              <div
                className="col-md-8"
                style={{ paddingLeft: "1rem", fontSize: "1.2em" }}
              >
                <ul className={`list-group list-group-flush ${ColorFont}`}>
                    <li className="list-group-item">Spitzensport (Handball-Nationalmannschaft / Deutscher Leichtathletik Verband)  Stuttgarter Ballett)</li>
                    <li className="list-group-item">Bundeswehr-Zentralkrankenhaus Koblenz</li>
                    <li className="list-group-item">Generali-Versicherungen</li>
                    <li className="list-group-item">Landesnervenklinik Berlin</li>
                    <li className="list-group-item">Bertiebskrankenkassen-Gesundheitsforum</li>
                    <li className="list-group-item">Bayerischer Schützenverband</li>
                    <li className="list-group-item">AOK</li>
                </ul>
              </div>
              
              </div>          
            </div>          
          </div>
          <div className="jumbotron">          
        </div>
      </>
    );
}

export default SectionWegpunkte