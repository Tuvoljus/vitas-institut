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
          <nav className="navbar navbar-default navbar-fixed-top h-100" style={{minHeight: '80px'}}>
            <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <Logo />
              </div>
              <div className="col-md-4 col-sm-4">
               <GiSmartphone /> 089 - 23 23 06 70
              </div>
              <div className="col-md-5 col-sm-5">
                <AiOutlineMail />   bk@vitas-institut.de
              </div>             
            </div> 
            
               
                
                               
            
                            
            </div>
          </nav>             
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
                            Bernhard Köser
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
                        <a className="nav-link" href="#contact" style={divStyle}>
                          Aktuelles / Links
                        </a>
                      </li>
                       <li className="nav-item">
                        <a className="nav-link" href="#contact" style={divStyle}>
                          Gästebuch
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