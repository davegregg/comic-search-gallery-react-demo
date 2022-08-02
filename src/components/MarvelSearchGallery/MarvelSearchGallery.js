import { useEffect, useState } from "react"
import "./MarvelSearchGallery.css"

import MarvelSearchForm from "../MarvelSearchForm/MarvelSearchForm"
import CharacterCard from "../CharacterCard/CharacterCard"
import { searchMarvelCharacters } from "../../services/MarvelAPI"

export default function MarvelSearchGallery ({ defaultSearchTerm="spider" }) {
    const [characters, setCharacters] = useState([])

    const submitSearch = event => {
        event?.preventDefault()  // Prevent the form from doing its default behavior of refreshing the page.

        const searchInputElement = event?.target.elements.search
        searchMarvelCharacters(searchInputElement?.value || defaultSearchTerm)
            .then(characters => {
                console.log(characters)
                setCharacters(characters)
            })
    }

    useEffect(() => submitSearch(), [])  // submitSearch on first load automatically, using defaultSearchTerm

    const characterCards = characters.map(character => (
        <CharacterCard character={character} key={character.id} />
    ))

    return (
        <section id="MarvelSearchGallery">
            <MarvelSearchForm onSubmit={submitSearch} />

            <div className="gallery">
                {characterCards}
            </div>
        </section>
    )
}
