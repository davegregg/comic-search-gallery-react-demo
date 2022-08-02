import "./CharacterCard.css"

export default function CharacterCard ({ character }) {
    const imgURL = new URL(`${character.thumbnail.path}.${character.thumbnail.extension}`)
    imgURL.protocol = "https:"
    
    const linkAltText = `${character.name} on Marvel.com`

    const urlObject = character.urls.find(urlObject => urlObject.type === "wiki") // or backup links if there is no wiki link for this character...
        || character.urls.find(urlObject => urlObject.type === "detail")
        || character.urls.find(urlObject => urlObject.type === "comiclink")

    const [firstLine, secondLine] = character.name.split(" (")
    
    return (
        <article className="CharacterCard">
            <img src={imgURL} alt={character.name} />
            <a href={urlObject.url} alt={linkAltText} target="_blank">
                <div className="name-first-line">{firstLine}</div>
                <div className="name-second-line">{secondLine && "(" + secondLine}</div>
            </a>
        </article>
    )
}
