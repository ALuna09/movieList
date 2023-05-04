import React from "react";

const Search =  (props) => {
    const { setSearchInput } = props;

    return (
        <form>
            <input 
            type="text"
            placeholder="Search"
            onChange={e => setSearchInput(e.target.value)}
            >
            </input>
        </form>
    )
}

export default Search;