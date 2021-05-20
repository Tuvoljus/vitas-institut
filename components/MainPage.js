import Link from 'next/link'
import NextScript from 'next/document'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useAmp } from 'next/amp'
const SectionAbout = dynamic(() => import('./SectionAbout'))



export const config = { amp: 'hybrid' }

const MainPage = () => {
    const isAmp = useAmp();
    return (
        <>
        <header>
            <div className="jumbotron" style={{padding: '3rem', backgroundColor: '#d7d7d7'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <Image src="/img/Bernhard.jpg" layout='responsive' width={188} height={187} quality="10" />
                            </div>
                            <div className="col-md-8 col-sm-8 align-self-center" style={{paddingLeft: '3rem'}}>
                                <h5>
                                    Willkommen mit Ihren Schmerzen und Ihrem Stress in meiner Privatpraxis.
                                </h5>
                                <span>
                                    <ul>
                                        <li>Was wirkt bei Ihnen am besten?</li>
                                        <li>Dazu finden wir gemeinsame Lösungen.</li>
                                        <li>Ich behandle Sie mit Kopf, Herz und Händen.</li>
                                        <li>Sie lernen sich und Ihren Körper besser kennen.</li>
                                        <li>Sie bekommen viel Hilfe zur Selbsthilfe.</li>
                                        <li>Ich nehme mir viel Zeit für Ihre Bedürfnisse (mind. 50 Minuten).</li>
                                    </ul>
                                </span>
                                <span style={{fontWeight: '600'}}>
                                    Seit 35 Jahren ist Ihre neue Lebensqualität mein Ansporn.
                                </span>
                            </div>
                        </div>
                </div>
            </div>
        </header>
        <main>
            <SectionAbout />               
        </main>
            {/* <NextScript /> */}
           
        </>    
    )
}

export default MainPage