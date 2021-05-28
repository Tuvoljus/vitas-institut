import Link from 'next/link'
import NextScript from 'next/document'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useAmp } from 'next/amp'
import { IconContext } from "react-icons"
import { GiHealthNormal } from "@react-icons/all-files/gi/GiHealthNormal"

const SectionAbout = dynamic(() => import('./SectionAbout'))




export const config = { amp: 'hybrid' }

const MainPage = () => {
    const isAmp = useAmp();

    const iconStyle = {
        color: "#1663b1",
        fontSize: "1rem"
    }
    return (
        <>
        <header>
            <div className="jumbotron" style={{padding: '3rem', backgroundColor: '#d7d7d7'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <Image src="/img/Bernhard_Kaeser.JPG" layout='responsive' width={1936} height={2335} quality="10" />
                            </div>
                            <div className="col-md-8 col-sm-8 align-self-center" style={{paddingLeft: '3rem'}}>
                                <h5>
                                    … weil Gesundheit glücklich macht
                                </h5>
                                <span>
                                    <ul style={{listStyle: 'none'}}>
                                        <li><GiHealthNormal style={ iconStyle }/> Was wirkt bei Ihnen am besten?</li>
                                        <li><GiHealthNormal style={ iconStyle }/> Dazu finden wir gemeinsame Lösungen.</li>
                                        <li><GiHealthNormal style={ iconStyle }/> Ich behandle Sie mit Kopf, Herz und Händen.</li>
                                        <li><GiHealthNormal style={ iconStyle }/> Sie lernen sich und Ihren Körper besser kennen.</li>
                                        <li><GiHealthNormal style={ iconStyle }/> Sie bekommen viel Hilfe zur Selbsthilfe.</li>
                                        <li><GiHealthNormal style={ iconStyle }/> Ich nehme mir viel Zeit für Ihre Bedürfnisse (mind. 50 Minuten).</li>
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