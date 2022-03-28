import React from 'react'
import Head from 'next/head'
import Script from "next/script";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container  from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { vl, inhaltBehandlung } from '../../scss/styles.module.scss'
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';


// export const config = { amp: 'hybrid' }

const Klassische_Massage = () => {   
    <Head>
        <title>Klassische Massage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Bernhard Käser Physiotherapeut in München Altstadt Lehel nähe Sendlinger Tor" />
        <meta name="keywords" content="Physiothereput Altstadt Lehel nähe Sendlinger Tor" />
        <Script  strategy="afterInteractive" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify
        (
          {
            "@context" : "http://schema.org",
            "@type" : "LocalBusiness",
            "name" : "Vitas-Institut Klassische Massage",
            "description": "Klassische Massage",           
            "image" : "https://www.vitas-institut.de/img/Bernhard.jpg",
            "telephone" : "+49 89 23 23 06 70",
            "email" : "bk@vitas-institut.de",
            "address" : {
                "@type" : "PostalAddress",
                "streetAddress" : "Oberanger 42",
                "addressLocality" : "München",
                "addressRegion" : "Bayern",
                "addressCountry" : "Deutschland",
                "postalCode" : "80331"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.13413978555193, 
                "longitude": 11.569055768148749
              },
            "priceRange": "€",
            "openingHours":["Mo - Do 10:00-18:00"],
            "url" : "https://www.vitas-institut.de"
          }) 
        }} 
        />
        
      </Head>
    return (
        <>
            <div>
                <Container>
                    <Row style={{position: 'absolute', zIndex: '2'}} className="align-self-center">
                        <h1>                                
                              Klassische Massage
                        </h1>
                    </Row>
                </Container>
               
            </div>
            <section className="d-none d-sm-block">
                <Container>
                    <Row>
                    {/* Sitemenue */}
                        <Col md={4}>
                            <SideMenue/>
                        </Col>
                        {/* Main Content */}
                        <Col md={1} className={vl} style={{color: 'black' }}>
                            
                        </Col>
                        <Col md={7}>
                            <div className={inhaltBehandlung}>
                                <h2 className="mx-auto">                                    
                                    Einführung Klassische Massage
                                </h2>                              
                                <br />
                                <p>
                                    Physiotherapeutische Behandlung von Gewebe und Muskeln durch Druck- u. Zugreize mit den klassischen Griffarten Streichung, Reibung, Knetung oder Walkung, Klopfung und Erschütterung.
                                </p>                            
                            </div>                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <MobileSideMenue />     
        </>
    )
}

export default Klassische_Massage