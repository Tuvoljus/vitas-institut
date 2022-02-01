import React from 'react'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { heading } from "../scss/styles.module.scss";

import { useAmp } from 'next/amp'
export const config = { amp: 'hybrid' }

const HeaderPicture = (props) => {
    const isAmp = useAmp();

    return(
        <section>
        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-center">
              <h1
                style={{ position: "absolute", zIndex: "2" }}
                className={`d-flex align-items-center ${heading}`}
              >
                {props.text}
              </h1>
            </Col>
          </Row>
        </Container>
        {isAmp ? (
            <amp-img layout="responsive"
            width="5245"
            height="2866"
            src="/img_webp/Hintergrund_Header_roetlich_1920.webp"
            alt="Background Image"/>
        ) : (
            <Image
          src="/img_avif/Hintergrund_Header_roetlich_1920.avif"
          layout="fill"
          objectFit="cover"
          quality="100"
          alt="Background Image"
        />
        )}
        
      </section>
    )
}

export default HeaderPicture