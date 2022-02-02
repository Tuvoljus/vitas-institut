import SbEditable from 'storyblok-react';

const Aktuelles = ({blok}) => {
    return (
        <>
        <SbEditable content={blok}>
            <div>
                <h2>{blok.name}</h2>
            </div>
        </SbEditable>
        </>        
    )
}

export default Aktuelles