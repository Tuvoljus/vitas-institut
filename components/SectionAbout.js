import React from 'react'

import { useAmp } from 'next/amp'

import { ColorFont, vl } from '../scss/styles.module.scss'


export const config = { amp: 'hybrid' }

const SectionAbout = () => {    
    return (
      <>
        <div className={ColorFont}>          
          <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-md-2" style={{width: '19.5%'}}>
                <h3>Stationen:</h3>
              </div>
              <div                
                className={`col-md-2 d-none d-sm-block ${vl}`}
              ></div>
              <div
                className="col-md-8"
                style={{ paddingLeft: "6rem", fontSize: "1.2em" }}
              >
                <p>
                  Sport-Klinik Damp, <br />
                  Rehazentrum Damp, <br />
                  Bundeswehr-Zentralkrankenhaus Koblenz,
                  <br />
                  Landesnervenklinik Berlin,
                  <br />
                  Praxismitarbeit Heidelberg,
                  <br />
                  2 Praxen in München geleitet (4 Jahre)
                  <br />
                  Ab 1995 eigene Praxis.
                </p>
                <p>
                  Was begeistert mich bis heute?
                  <br />
                  Fragen stellen, weiter Forschen, ständig neues Lernen,
                  <br />
                  immer wieder Staunen.
                  <br />
                  Für Menschen mit ganzem Herzen da sein dürfen.
                </p>
                <p>
                  Verheiratet mit einer genau so begeisterten &ldquo;Forscher-
                  und Entdeckerin&ldquo;.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default SectionAbout