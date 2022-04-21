import React from 'react'
import Image from 'next/dist/client/image'

import { useAmp } from 'next/amp'

import { ColorFont, vl } from '../scss/styles.module.scss'


export const config = { amp: 'hybrid' }

const SectionAbout = () => {    
  const isAmp = useAmp();  
    return (
      <>
        <div className={ColorFont}>          
          <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-md-2" style={{width: '19.4%'}}>
                <h3>Stationen</h3>
              </div>
              <div                
                className={`col-md-1 d-none d-sm-block ${vl}`}
              ></div>
              <div
                className="col-md-4"
                style={{ paddingLeft: "1rem", fontSize: "1.2em" }}
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
                  immer wieder Staunen.
                  <br />
                  Für Menschen mit ganzem Herzen da sein dürfen.
                </p>
                <p>
                  Verheiratet mit einer genau so begeisterten &ldquo;Forscher-
                  und Entdeckerin&ldquo;.
                </p>
              </div>
              <div className="col-md-5">
              {isAmp ? (
                <amp-img
                  layout="responsive"
                  width="1024"
                  height="768"
                  src="img/Physiotherapeut_Altstadt_Bernhard_Käser_Orchideen.jpg"
                  alt="Physiotherapeut Altstadt"
                />
              ) : (
                <div>
                  <Image
                    src="/img_webp/Physiotherapeut_Altstadt_Bernhard_Käser_Orchideen.webp"
                    layout="responsive"
                    width={1024} 
                    height={768}
                    objectFit="cover"
                    quality="50"
                    alt="HeaderImage Bernhard Käser"                    
                  />
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default SectionAbout