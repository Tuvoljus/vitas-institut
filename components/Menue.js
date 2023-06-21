import React, { useState, useEffect } from 'react';
import Logo from '../public/img/Logo_Vitas_Institut.svg';
import CopyMailTo from 'react-copy-mailto';
import { GiSmartphone } from '@react-icons/all-files/gi/GiSmartphone';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
// import { GiSmartphone } from 'react-icons/gi'
import Link from 'next/link';

const Menue = () => {
  const [openedCollapse, setOpenedCollapse] = useState('');
  const [customToggler, setCustomToggler] = useState('');
  const [customBorder, setCustomBorder] = useState('');
  const [fixedTop, setFixedTop] = useState('');
  const [marginTop, setMarginTop] = useState('');

  const showBlog = () => {
    if (openedCollapse != 'show') {
      setOpenedCollapse('show');
    } else {
      setOpenedCollapse('');
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
  };

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
        setBrandColor('#1663b1');
      } else {
        // upscroll code
        setCustomBorder('');
        setCustomToggler('');
        // setScrolling('');
        setBrandColor('');
      }
      if (currentPosition > 80) {
        setFixedTop('sticky-top');
        setMarginTop('40');
      } else {
        setFixedTop('');
        setMarginTop('40px');
      }
    }

    const ChangeHamburgerIcon = () => {
      divStyleBorderColor = {
        bColor: { customBorder },
      };
    };

    const ChangeBrandColor = () => {
      divStyle = {
        color: { brandColor },
      };
    };

    const ChangeMarginTop = () => {
      divMarginTop = {
        marginBottom: { marginTop },
      };
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <>
      <div className="container" style={{ paddingTop: '1rem' }}>
        <div className="row">
          <div className="col-2 col-md-2 col-xl-2">
            <Logo />
          </div>
          <div className="col-md-2 col-xl-2 align-self-center">
            <GiSmartphone />{' '}
            <a
              rel={'nofollow'}
              itemProp={'telephone'}
              href="tel:089 - 23 23 06 70"
              style={{ textDecoration: 'none' }}
            >
              089 - 23 23 06 70
            </a>{' '}
            <br />
            <AiOutlineMail />{' '}
            <CopyMailTo
              email="bk@vitas-institut.de"
              defaultTooltip="klicken zum Kopieren der Email"
              copiedTooltip="Email ist kopiert in den Zwischenspeicher!"
              style={{ textDecoration: 'none !important' }}
            >
              bk@vitas-institut.de
            </CopyMailTo>
          </div>
          <div className="col-md-1 col-xl-1 align-self-center"></div>
          <div className="col-md-3 col-xl-3 align-self-center">
            Oberanger 42 <br />
            80331 München <br />
            Nähe Sendlinger Tor
          </div>
        </div>
      </div>

      <nav className={`navbar navbar-expand-lg navbar-light ${fixedTop} c-bg`}>
        <div className="container">
          <a className="navbar-brand" href="#page-top" style={divStyle}>
            <p>Privatpraxis für Physiotherapie</p>
            Vitas Institut
          </a>
          <button
            className={`navbar-toggler navbar-toggler-right ${customToggler}`}
            style={divStyleBorderColor}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" onClick={showBlog}></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end ${openedCollapse}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  {/*add for Menue Color style={divStyle} */}
                  <a className="nav-link " href="#about">
                    Bernhard Käser
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/behandlungen">
                  {/*add for Menue Color style={divStyle} */}
                  <a className="nav-link ">Behandlungen</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/preise">
                  {/*add for Menue Color style={divStyle} */}
                  <a className="nav-link">Preise</a>
                </Link>
              </li>
              <li className="nav-item">
                {/*add for Menue Color style={divStyle} */}
                <a className="nav-link" href="/aktuelles">
                  Aktuelles
                </a>
              </li>
              <li className="nav-item">
                {/*add for Menue Color style={divStyle} */}
                <a className="nav-link" href="/links">
                  Links
                </a>
              </li>
              <li className="nav-item">
                {/*add for Menue Color style={divStyle} */}
                <a className="nav-link" href="/Anfahrt">
                  Anfahrt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menue;
