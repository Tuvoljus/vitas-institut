import Link from 'next/link'
import Image from 'next/image'
import { useAmp } from 'next/amp'
import styles from '../scss/Portfolio.module.scss'

export const config = { amp: 'hybrid' };

const SectionPortfolio = () => {
    const isAmp = useAmp();
    return (
        <>
            {/* <!-- Portfolio Section--> */}
            <section id="portfolio" className="portfolio">            
            <div className="container-fluid text-center">
                <header>
                    <h1 className="small-heading">
                    Portfolio
                    </h1>
                    <h2>
                    Unsere Kundenprojekte
                    </h2>
                </header>
                <div className="row">
                        <div className={`${styles.item} col-lg-3 col-md-6`}>
                            <a href="#" data-toggle="modal" data-target="#portfolio-item1">
                            {isAmp ? (
                                <amp-img layout="responsive" width="700" height="700" src="/img_webp/q-solutions.webp" alt="Q-Solutions" />
                            ):(
                                <Image layout='responsive' src="/img/q-solutions.jpg" width={700} height={700} alt="Alexander Keil" />
                            )}                                      
                    <div className={[styles.overlay]}>
                        <div className="content">
                        <h2>Q-Solutions GmbH</h2>
                        <p>Web Projekt</p>
                        </div>
                    </div>
                    </a>
                    </div>
                {/* <!-- End Item--> */}
                
                        <div className={`${styles.item} col-lg-3 col-md-6`}>
                            <a href="#" data-toggle="modal" data-target="#portfolio-item2">
                                {isAmp ? 
                                (<amp-img layout="responsive" width="700" height="700" src="/img_webp/Falamex.webp" alt="Falamex"/>
                                ) : (
                                <Image layout='responsive' src="/img/Falamex.jpg" width={700} height={700} alt="Falamex" />
                                )}                               
                                <div className={[styles.overlay]}>
                                    <div className="content">
                                        <h2>
                                            Falamex
                                        </h2>
                                        <p>
                                            Web Projekt
                                        </p>
                                     </div>
                                </div>
                            </a>
                    </div>
                {/* <!-- End Item--> */}
                
                        <div className={`${styles.item} col-lg-3 col-md-6`}>
                            <a href="#" data-toggle="modal" data-target="#portfolio-item1">
                                {isAmp ? (
                                    <amp-img layout='responsive' src="/img_webp/donut-baellchen.webp" width="700" height="700" alt="Donut Bällchen"/>
                                ):(
                                    <Image layout='responsive' src="/img/donut-baellchen.jpg" width={700} height={700} height="700" alt="Donut Bällchen" />
                                )}                              

                                <div className={[styles.overlay]}>
                                    <div className="content">
                                        <h2>
                                            Donut Bällchen
                                            </h2>
                                        <p>
                                            Web Projekt
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                {/* <!-- End Item--> */}                
                        <div className={`${styles.item} col-lg-3 col-md-6`}>
                            <a href="#" data-toggle="modal" data-target="#portfolio-item2">
                                {isAmp ? (
                                    <amp-img layout='responsive' src="/img_webp/keil-baumaschinen.webp" width="700" height="700" alt="Keil Baumaschinen" />
                                ) :(
                                <Image layout='responsive' src="/img/keil-baumaschinen.jpg" width={700} height={700} alt="Keil Baumaschinen" />
                                )}
                                
                              
                                <div className={[styles.overlay]}>
                                    <div className="content">
                                        <h2>
                                            Keil Baumaschinen
                                        </h2>
                                        <p>
                                            Web Projekt
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                {/* <!-- End Item--> */}               
                </div>
            </div>
            {/* <!-- Demo Portfolio Modal - Duplicate for more items, replace id with a new one--> */}
            <div id="portfolio-item1" tabIndex="-1" role="dialog" aria-hidden="true" className="modal fade">
                <div role="document" className="modal-dialog">
                    <div className="modal-content">
                            <button type="button" data-dismiss="modal" aria-label="Close" className="close">
                                <span aria-hidden="true">
                                    <i className="icon-close">
                                    </i>
                                </span>
                            </button>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="mockup col-lg-6">
                                    <div className="device-mockup">
                                        <div data-device="Macbook2015" data-orientation="portrait" data-color="gold" className="device device">
                                            <div className="screen">
                                                Image
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text col-lg-6 text-center text-lg-left mt-5 mt-lg-0">
                                    <h2>
                                        Demo portfolio item name                                             
                                    </h2>
                                    <p className="lead">
                                        You can create these popups easily. Every portfolio item will need one. Also, no need to worry about the Macbook mockups. Just paste a photo, template will do the rest.
                                    </p>
                                    <p>
                                        Maxime animi quia distinctio magnam, deleniti officiis quibusdam cupiditate sed id labore at, odio odit recusandae assumenda ea impedit autem nisi minima.
                                    </p>
                                    <p>
                                        Maxime animi quia distinctio magnam, deleniti officiis quibusdam cupiditate sed id labore at, odio odit recusandae assumenda ea impedit autem nisi minima.
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Visit website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Modal--> */}
            {/* <!-- Modal--> */}
            <div id="portfolio-item2" tabIndex="-1" role="dialog" aria-hidden="true" className="modal fade">
                <div role="document" className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true"><i className="icon-close"></i></span></button>
                        <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="mockup col-lg-6">
                            <div className="device-mockup">
                                <div data-device="Macbook2015" data-orientation="portrait" data-color="gold" className="device device">
                                        <div className="screen">
                                            Image
                                        </div>
                                </div>
                            </div>
                            </div>
                            <div className="text col-lg-6 text-center text-lg-left mt-5 mt-lg-0">
                            <h2>Demo portfolio item name</h2>
                                <p className="lead">
                                    You can create these popups easily. Every portfolio item will need one. Also, no need to worry about the Macbook mockups. Just paste a photo, template will do the rest.
                                </p>
                                <p>
                                    Maxime animi quia distinctio magnam, deleniti officiis quibusdam cupiditate sed id labore at, odio odit recusandae assumenda ea impedit autem nisi minima.
                                </p>
                                <p>
                                    Maxime animi quia distinctio magnam, deleniti officiis quibusdam cupiditate sed id labore at, odio odit recusandae assumenda ea impedit autem nisi minima.
                                </p>
                                    <a href="#" className="btn btn-primary">
                                            Visit website
                                    </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Modal--> */}
            </section>
            {/* <!-- End Portfolio Section--> */}
        </>
    )
}

export default SectionPortfolio