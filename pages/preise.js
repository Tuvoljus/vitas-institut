import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAmp } from 'next/amp'

const Preise = () => {
  return (
      <>
      <div className="jumbotron" style={{padding: '3rem', backgroundColor: '#d7d7d7'}}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 >Preise</h1>                 
                
            </div>
          </div>            
        </div>
      </div>
      <div className="jumbotron" style={{paddingTop: '3rem'}}>
        <div className="container">
          <div className="row">
            <div className="col col-md-4">
              <p>
                REZEPTE von PRIVAT-VERSICHERTEN  mit z.B.<br />
                Massage,<br />
                Manuelle Therapie, <br />
                Krankengymnastik, <br />
                Elektrotherapie, <br />
                Naturmoor, <br />
                Krankengymnastik Gerätegestützt etc., <br />
                werden vollständig von den PRIVATKASSEN rückerstattet.
              </p>
              <p style={{fontWeight: 900}}>
                SELBSTZAHLER    80 EUR  ( 50 Minuten )
              </p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Preise