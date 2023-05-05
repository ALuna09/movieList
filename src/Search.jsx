import React from "react";

const Search =  (props) => {
    const { 
        searchInput,
        setSearchInput
    } = props;

    // console.log('Search Input: ', searchInput , '\nFiltered Movies:', filteredMovies)

    return (
        <form
            onSubmit={e => e.preventDefault(e)}
        >
            <input 
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
            >
            </input>
        </form>
    )
}

export default Search;