import React from "react";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ColorFont, vlAnfahrt, heading } from "../scss/styles.module.scss";
import HeaderPicture from "../components/HeaderPicture";

const Anfahrt = () => {
  return (
    <>
      <HeaderPicture text="Meine Praxis in München" />
      <section style={{ paddingBottom: "0px" }}>
        <div className={ColorFont}>
          <div className="container text-center" style={{ marginTop: "3rem" }}>
            <div className="row">
              <div className="col-md-2">
                <h3>Praxis</h3>
              </div>
              <div className={`col-md-1 d-none d-sm-block ${vlAnfahrt}`}></div>
              <div className="col-md-8" style={{ fontSize: "1.2em" }}>
                <p>
                  VITAS - Institut für Entspannungstechniken <br />
                  Oberanger 42 | Nähe Sendlinger Tor <br />
                  80331 München
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "0px" }}>
        <div className={ColorFont}>
          <div className="container text-center">
            <div className="row">
              <div className="col-md-2">
                <h3>Anreise</h3>
              </div>
              <div className={`col-md-1 d-none d-sm-block ${vlAnfahrt}`}></div>
              <div
                className="col-md-8 text-center"
                style={{ fontSize: "1.2em" }}
              >
                <p>Haltestelle Sendlinger Tor U1 / U2 / U3 / U6 / U7 / U8</p>
                <p>Straßenbahn 16 / 17 / 18 / 27 / 28</p>
                <p>Bus 52 / 62</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Anfahrt;
