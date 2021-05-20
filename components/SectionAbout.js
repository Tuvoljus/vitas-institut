import Link from 'next/link'
import Image from 'next/image'
import { useAmp } from 'next/amp'


export const config = { amp: 'hybrid' }

const SectionAbout = () => {    
    return (
        <> 
            <section id="about" className="about">               
                <div className="container text-center">                
                    <h1 className="small-heading">Über mich</h1>
                                     
                </div>
                <div className="container" style={{marginTop: '3rem'}}>
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Stationen:</h5> 
                        </div>
                        <div className="col-md-8">
                            <p>
                                Sport-Klinik Damp, <br />
                                Rehazentrum Damp, <br />
                                Bundeswehr-Zentralkrankenhaus Koblenz,<br />
                                Landesnervenklinik Berlin,<br />
                                Praxismitarbeit Heidelberg,<br />
                                2 Praxen in München geleitet (4 Jahre)<br />
                                Ab 1995 eigene Praxis.
                            </p>
                            <p>
                                Was begeistert mich bis heute?<br />
                                Fragen stellen, weiter Forschen, ständig neues Lernen,<br />
                                immer wieder Staunen.<br />
                                Für Menschen mit ganzem Herzen da sein dürfen.
                            </p>
                            <p>
                                Verheiratet mit einer genau so begeisterten "Forscher- und Entdeckerin".
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionAbout