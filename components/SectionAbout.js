import { useAmp } from 'next/amp'

import { ColorFont, vl } from '../scss/styles.module.scss'


export const config = { amp: 'hybrid' }

const SectionAbout = () => {    
    return (
      <>
        <div className={ColorFont}>
          <div className="container text-center">
            <h1 className="small-heading">Über mich</h1>
          </div>
          <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-md-2">
                <h3>Stationen:</h3>
              </div>
              <div
                className="col-md-2"
                className={`d-none d-sm-block ${vl}`}
              ></div>
              <div
                className="col-md-8"
                style={{ paddingLeft: "5rem", fontSize: "1.2em" }}
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
                  Verheiratet mit einer genau so begeisterten "Forscher- und
                  Entdeckerin".
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default SectionAbout