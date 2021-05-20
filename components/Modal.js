import React, { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
import Image from 'next/image'

import styles from '../scss/Portfolio.module.scss'

const Modal = ({ show, onClose, children, title, picture, alt, isFade, isShow }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  

  useEffect(() => {
    setIsBrowser(true);
  },[]);




  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
     <div tabIndex="-1" role="dialog" aria-hidden="true" className={`modal ${styles.modal} ${isShow} ${isFade}`} style={{display: 'block', paddingRight: '17px', paddingLeft: '17px'}}>
        <div role="document" className={`modal-dialog ${styles.modalDialog}`}>
          <div className={`modal-content ${styles.modalContent}`}>
            <button type="button" data-dismiss="modal" aria-label="Close" onClick={handleCloseClick} className={`${styles.closeButton} btn-close`} >
              <span  aria-hidden="true">
                <i  className="icon-close">
                </i>
              </span>
            </button>            
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="mockup col-lg-6">
                  <div className="device-mockup">
                    <div data-device="Macbook2015" data-orientation="portrait" data-color="gold" className="device device">
                      <div className="screen">
                        <Image layout='responsive' src={`${picture}`} width={700} height={700} alt={`${alt}`} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text col-lg-6 text-center text-lg-left mt-5 mt-lg-0">                 
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  ) : null;

  if (isBrowser) {      
    return ReactDOM.createPortal(      
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;    
  }
};


export default Modal;