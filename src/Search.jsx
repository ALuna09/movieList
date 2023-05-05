import React from "react";

const Search =  (props) => {
    const { 
        searchInput,
        setSearchInput,
        movieFilter
    } = props;

    // console.log('Search Input: ', searchInput , '\nFiltered Movies:', filteredMovies)

    return (
        <form>
            <input 
                type="text"
                placeholder="Search"
                onChange={e => setSearchInput(e.target.value)}
            >
            </input>
            <input
                type="button"
                onClick={movieFilter(searchInput)}
            >
                Search
            </input>
        </form>
    )
}

export default Search;