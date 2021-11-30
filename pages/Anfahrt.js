import React from 'react'
import Image from 'next/image'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { ColorFont, vlKontakt, heading } from '../scss/styles.module.scss'

export const config = { amp: 'hybrid' }

const Anfahrt = () => {    
    return (
      <>
      <section>
        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <h1
                style={{ position: "absolute", zIndex: "2" }}
                className={`d-flex align-items-center ${heading}`}
              >
                Anfahrt
              </h1>
            </Col>
          </Row>
        </Container>
        <Image
          src="/img/Header_Bild_Rot.jpg"
          layout="fill"
          objectFit="cover"
          quality="100"
        />
      </section>
      <section>
        <div className={ColorFont}>
        <div className="container text-center">
            <h1 className="small-heading">Meine Praxis in München</h1>
        </div>
          <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-md-2">
                <h3>Anfahrt</h3>
              </div>
              <div                
                className={`col-md-2 d-none d-sm-block`} style={{border: 'none', borderLeft: '1px  solid rgba($color: #707070, $alpha: 1.0)', height: '20vh', width: '1px', marginLeft: '3rem'}}
              ></div>
              <div
                className="col-md-8"
                style={{ paddingLeft: "8rem", fontSize: "1.2em" }}
              >
                <p>
                VITAS - Institut für Entspannungstechniken <br />      
                        Oberanger 42  |  80331 München
                </p>                  
              </div>
             
            </div>
          </div>
          <div className="container text-center">
            <h1 className="small-heading">Anreise</h1>
            <p>
            Haltestelle Sendlinger Tor  U1 / U2 / U3 / U6 / U7 / U8
                      
            </p>
            <p>
            Straßenbahn   16 / 17 / 18 / 27 / 28
            </p>
            <p>
            Bus  52 / 62
            </p>
        </div>
        </div>
      </section>
        
      </>
    );
}

export default Anfahrt