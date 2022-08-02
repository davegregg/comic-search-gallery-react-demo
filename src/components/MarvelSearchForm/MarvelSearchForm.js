import "./MarvelSearchForm.css"

export default function MarvelSearchForm ({ onSubmit }) {
    return (
        <form id="SearchForm" onSubmit={onSubmit}>
            <input type="search" name="search" placeholder="Name starts with..." autoFocus />
            <button>Search</button>
        </form>
    )
}
