import React from 'react';
import { gql } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Link from 'next/link';

import {
  vl,
  heading,
  ColorFont,
  inhaltBehandlung,
} from '../scss/styles.module.scss';

export const EVENT_CARD_FIELDS = gql`
  fragment EventFields on Event {
    databaseId
    name
    description
    datum
  }
`;

export default function EventCard({ event }) {
  const { name, description, datum } = event;
  console.log(datum, "Datum")
  return (
    <>
    <br />
      <Row>
        <Col md={4} className="d-none d-sm-block">
          <h3 className={ColorFont}>{name}</h3>
          <div>Datum</div>
          <span>{datum}</span>

        </Col>
        <Col
          md={1}
          className={`d-none d-sm-block  ${vl}`}         
        ></Col>
        <Col md={7} className={` ${ColorFont}`}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Col>        
      </Row>
      <br />
      <Row>
          <Col  md={3} className='border-bottom'></Col>
          <Col md={3}></Col>
          <Col  md={6} className='border-bottom'></Col>
      </Row>
    </>
  );
}
