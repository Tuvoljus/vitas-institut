import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import { ColorFont, vlQualification } from '../scss/styles.module.scss'


export const config = { amp: 'hybrid' }

const SectionWegpunkte = () => {
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
                <h4>Spitzensport</h4>
                <ul className={`list-group list-group-flush ${ColorFont}`}>
                    <li className="list-group-item">Handball-Nationalmannschaft</li>
                    <li className="list-group-item">Deutscher Leichtathletik-Verband</li>
                    <li className="list-group-item">Bayerischer Schützenverband</li>
                    <li className="list-group-item">Stuttgarter Ballett</li>
                </ul>
                <Row>
                  <Col>
                  </Col>
                  <Col>
                  </Col>
                </Row>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item style={{marginLeft:'-18px'}}>
                    <Accordion.Header>
                      <h4 >
                        Seminare
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                    <ul className={`list-group list-group-flush ${ColorFont}`}>                    
                    <li className="list-group-item">Bayerische Landesanstalt für Aufbaufinanzierung</li>
                    <li className="list-group-item">Bertiebskrankenkassen-Gesundheitsforum</li>
                    <li className="list-group-item">Bundeswehr-Zentralkrankenhaus Koblenz</li>                   
                    <li className="list-group-item">Bayerische Verwaltungsschule</li> 
                    <li className="list-group-item">Reha-Sport-Klinik Damp 2000</li>
                    <li className="list-group-item">Landesnervenklinik Berlin</li>
                    <li className="list-group-item">Generali-Versicherungen</li>
                    <li className="list-group-item">Ingram Macrotron</li>
                    <li className="list-group-item">Graf Dichtungen</li>
                    <li className="list-group-item">Imbus Recycling</li>
                    <li className="list-group-item">LSI Logic</li>   
                    
                      
                      
                      <li className="list-group-item">DAK</li>
                      <li className="list-group-item">EON</li>
                      <li className="list-group-item">AOK</li>
                    </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              </div>          
            </div>          
          </div>
      </>
    );
}

export default SectionWegpunkte