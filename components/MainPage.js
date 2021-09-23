import Link from 'next/link'
import NextScript from 'next/document'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { iconStyle } from '../scss/Icons.module.scss'
import { ColorFont } from '../scss/styles.module.scss'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useAmp } from 'next/amp'
import { BsPlus } from "@react-icons/all-files/bs/BsPlus"

const SectionAbout = dynamic(() => import('./SectionAbout'))

export const config = { amp: 'hybrid' }

const MainPage = () => {
    const isAmp = useAmp();

    // const iconStyle = {
    //     color: "#1663b1",
    //     fontSize: "1.4rem"
    // }
    return (
      <>
        <div>
          <Container>
            <Row
              style={{ zIndex: "2", marginTop: "5rem" }}
              className="w-75 p-3 position-absolute"
            >
              <Col xs={10} sm={8} md={4} lg={4} xl={3}>
                <div
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  {isAmp ? (
                    <amp-img
                      layout="responsive"
                      width="1936"
                      height="2335"
                      src="/img_webp/Bernhard.webp"
                      alt="Bernhard Käser"
                    />
                  ) : (
                    <Image
                      className="rounded-3"
                      src="/img/Bernhard_Kaeser.JPG"
                      layout="responsive"
                      width={1936}
                      height={2335}
                      quality="10"
                    />
                  )}
                </div>
              </Col>
              <Col
                xs={12}
                sm={4}
                md={8}
                lg={8}
                xl={8}
                className={`align-self-center ${ColorFont}`}
                style={{ paddingLeft: "3rem" }}
              >
                <h5>… weil Gesundheit glücklich macht</h5>
                <span>
                  <ul style={{ listStyle: "none", lineHeight: "200%" }}>
                    <li>
                      <BsPlus className={iconStyle} /> Was wirkt bei Ihnen
                      am besten?
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Dazu finden wir
                      gemeinsame Lösungen.
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Ich behandle Sie mit
                      Kopf, Herz und Händen.
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Sie lernen sich und
                      Ihren Körper besser kennen.
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Sie bekommen viel
                      Hilfe zur Selbsthilfe.
                    </li>
                    <li>
                      <BsPlus className={iconStyle} /> Ich nehme mir viel
                      Zeit für Ihre Bedürfnisse (mind. 50 Minuten).
                    </li>
                  </ul>
                </span>
                <span style={{ fontWeight: "600" }}>
                  Seit 35 Jahren ist Ihre neue Lebensqualität mein Ansporn.
                </span>
              </Col>
            </Row>
          </Container>
          <div>
            {isAmp ? (
              <amp-img
                layout="responsive"
                width="1920"
                height="720"
                src="/img_webp/Header_Bild_Gruen.webp"
                alt="HeaderImage Bernhard Käser"
              />
            ) : (
              <Image
                src="/img/Header_Bild_Gruen.jpg"
                layout="responsive"
                objectFit="cover"
                height={720}
                width={1920}
                quality="10"
              />
            )}
          </div>
        </div>
        <main>
          <SectionAbout />
        </main>
        {/* <NextScript /> */}
      </>
    );
}

export default MainPage