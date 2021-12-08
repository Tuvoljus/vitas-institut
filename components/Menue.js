import React, { useState, useEffect } from 'react'
import Logo from "../public/img/Logo_Vitas_Institut.svg"
import { GiSmartphone } from "@react-icons/all-files/gi/GiSmartphone"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
// import { GiSmartphone } from 'react-icons/gi'
import Image from 'next/image'
import Link from 'next/link'


const Menue = () => {
const [openedCollapse, setOpenedCollapse] = useState('');
const [customToggler, setCustomToggler] = useState('');
const [customBorder, setCustomBorder] = useState('');
const [fixedTop, setFixedTop] = useState('');
const [marginTop, setMarginTop] = useState('');
    
    const showBlog = () => {
        if (openedCollapse != 'show') {
            setOpenedCollapse('show') 
        } else {
            setOpenedCollapse('') 
        }   
    };


// const [scrolling, setScrolling] = useState(null);
  const [scrollTop, setScrollTop] = useState(80);
    const [brandColor, setBrandColor] = useState(null);    

// Border Color Hamburger Icon    
const bColor = customBorder;
const divStyleBorderColor = {
  borderColor: bColor,
  //color: bColor         
};

const maTop = marginTop;
const divMarginTop = {
  marginBottom: maTop,
}

const color = brandColor;
const divStyle = {
  color: color,         
};
 

    useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > 80) {
        // downscroll code
          setCustomBorder('blue');
          setCustomToggler('custom-toggler');
          // setScrolling('c-bg');
          setBrandColor('#1663b1')
          
      } else {
        // upscroll code
          setCustomBorder('');
          setCustomToggler('');
          // setScrolling('');
          setBrandColor('')          
      } 
        if(currentPosition > 80) {
          setFixedTop('sticky-top');
          setMarginTop('40')
        } else {
          setFixedTop('');
          setMarginTop('40px')
        } 
        };

      const ChangeHamburgerIcon = () => {
      divStyleBorderColor = {
        bColor : {customBorder},
      };
    };   

     const ChangeBrandColor = () => {
         divStyle = {
         color: {brandColor},         
  }; 
    };

    const ChangeMarginTop = () => {
      divMarginTop = {
        marginBottom: {marginTop},
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
     
   
    
    return (
        <>        
          
          <div className="container" style={{paddingTop: '1rem'}}>           
              <div className="row">
                <div className="col-2 col-md-2 col-xl-2">
              <Logo />
                </div>
                <div className="col-md-2 col-xl-2 align-self-center">
                  <GiSmartphone /> 089 - 23 23 06 70
                </div>
                <div className="col-md-2 col-xl-2 align-self-center">
                  <AiOutlineMail /> bk@vitas-institut.de
                </div>
                <div className="col-md-2 col-xl-2 align-self-center">
                  Oberanger 42 <br />Nähe Sendlinger Tor
                </div>             
              </div>          
            </div>
                       
          <nav className={`navbar navbar-expand-lg navbar-light ${fixedTop} c-bg`}>
            <div className="container">              
              <a className="navbar-brand" href="#page-top" style={divStyle}>
                Vitas Institut
              </a>
              <button className={`navbar-toggler navbar-toggler-right ${customToggler}`} style={divStyleBorderColor} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" onClick={showBlog}></span>
              </button>    
                <div className={`collapse navbar-collapse justify-content-end ${openedCollapse}`} id="navbarResponsive" >
                  <ul className="navbar-nav">                      
                      <li className="nav-item">
                        <Link href="/">
                          <a className="nav-link " href="#about" style={divStyle}>
                            Bernhard Käser
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/behandlungen">
                           <a className="nav-link " style={divStyle}>
                            Behandlungen
                          </a>
                        </Link>                         
                      </li>
                      <li className="nav-item">
                        <Link href="/preise">
                          <a className="nav-link" style={divStyle}>
                            Preise
                          </a>
                        </Link> 
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/aktuelles_und_links" style={divStyle}>
                          Aktuelles / Links
                        </a>
                      </li>
                       <li className="nav-item">
                        <a className="nav-link" href="/Anfahrt" style={divStyle}>
                          Anfahrt
                        </a>
                      </li>
                    </ul>
                  </div>      
              </div>
          </nav>
        
        </>
    )
}

export default Menue