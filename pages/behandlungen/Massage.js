import React from 'react'
import Image from 'next/image'
import Link from "next/link"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container  from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { vl, heading, inhaltBehandlung } from '../../scss/styles.module.scss'
import SideMenue from '../../components/SideMenue';
import MobileSideMenue from '../../components/MobileSideMenue';

import dynamic from 'next/dynamic'
import Head from 'next/head'
const HeaderPicture = dynamic(() => import('../../components/HeaderPicture'))




const Massage = () => {   

    return (
        <>  
        <Head>
            Physiotherapie - Massage</Head>         
            <HeaderPicture text="Massage" />
            <section>
                <Container >
                    <Row>
                    {/* Sitemenue */}
                    <Col md={4} className="d-none d-sm-block">                            
                            <SideMenue />                            
                        </Col>
                        {/* Main Content */}
                        <Col
                            md={1}
                            className={`d-none d-sm-block ${vl}`}
                            style={{ color: "black" }}                
                        >
                        </Col>
                        <Col md={7}>
                            <div className={inhaltBehandlung}>
                                <h2 className="mx-auto">
                                    Massage
                                </h2>                              
                                <br />
                                <p>
                                    Klassische Massage / Sportmassage / Wellnessmassage
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

export default Massage