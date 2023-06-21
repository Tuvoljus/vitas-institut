import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventList from '../components/EventList';

import { EVENT_CARD_FIELDS } from '../components/EventCard';

import { gql } from '@apollo/client';
import { client } from '../lib/apolloClient';

import {
  vl,
  heading,
  ColorFont,
  inhaltBehandlung,
} from '../scss/styles.module.scss';
import HeaderPicture from '../components/HeaderPicture';
import Head from 'next/head';
//import { Accordion } from 'react-bootstrap'
//import Aktuelles from '../components/Aktuelles'

// The Storyblok Client
// import Storyblok, { useStoryblok } from '../lib/storyblok';
// import DynamicComponent from '../components/DynamicComponent';

const GET_EVENTS = gql`
  query getEvents {
    events(first: 10) {
      nodes {
        ...EventFields
      }
    }
  }
  ${EVENT_CARD_FIELDS}
`;

export default function Aktuelles({ story, preview, events }) {
  //   const enableBridge = true; // load the storyblok bridge everywhere
  //  //const enableBridge = preview; // enable bridge only in prevew mode
  // const enableBridge = true;

  //const story = props.story

  // versteckt vorübergehend

  // für Storyblok einschalten
  // story = useStoryblok(story, preview);

  return (
    <>
      <Head>
        <title>Aktuelles</title>
      </Head>
      <HeaderPicture text="Aktuelles" />
      {/* 
      <section>
        <Container>
          <Row>
            <Col md={4} className="d-none d-sm-block">
              <h2 className={ColorFont}>Aktuelles</h2>
            </Col>
            <Col
              md={1}
              className={`d-none d-sm-block ${vl}`}
              style={{ color: 'black' }}
            ></Col>
            <Col md={7} className={ColorFont}>
             
              <span style={{ fontWeight: '700' }}>Liebe Seitenbesucher,</span>
              <br />
              <br />
              seit Januar 2022 freue ich mich, nach einem Re-Design meiner 10
              Jahre alten Internetseite, auf meine neue Interneseite Vitas
              Institut.
              <br />
              <br />
              Herzlichst,
              <br />
              Bernhard K&auml;ser
            </Col>
          </Row>
        </Container>
      </section>
       */}
      <section>
        <Container>
          <EventList events={events} />
        </Container>
        {/* <DynamicComponent blok={story.content} /> */}
      </section>
      {/* <Script src="//app.storyblok.com/f/storyblok-v2-latest.js" type="text/javascript" id="storyblokBridge"/> */}
    </>
  );
}

// export async function getStaticProps({ preview = false }) {
//     // home is the default slug for the homepage in Storyblok
//     let slug = "home";
//     // load the published content outside of the preview mode
//     let sbParams = {
//       version: "published", // or 'draft'
//     };

//     if (preview) {
//       // load the draft version inside of the preview mode
//       sbParams.version = "draft";
//       sbParams.cv = Date.now();
//     }

//     let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

//     return {
//       props: {
//         story: data ? data.story : null,
//         preview,
//       },
//       revalidate: 3600, // revalidate every hour
//     };
//   }

// export default AktuellesUndLinks

//NEW

// export async function getStaticProps(context) {
//   // home is the default slug for the homepage in Storyblok
//   let slug = "home";
//   // load the published content outside of the preview mode
//   let params = {
//     version: "published", // or 'draft'
//   };

//   if (context.preview) {
//     // load the draft version inside of the preview mode
//     params.version = "draft";
//     params.cv = Date.now();
//   }

//   let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

//   return {
//     props: {
//       story: data ? data.story : false,
//       preview: context.preview || false
//     },
//     revalidate: 3600, // revalidate every hour
//   };
// }

// For Wordpress fetch
export async function getStaticProps() {
  const response = await client.query({
    query: GET_EVENTS,
  });

  return {
    props: {
      events: response?.data?.events?.nodes ?? [],
    },
  };
}
