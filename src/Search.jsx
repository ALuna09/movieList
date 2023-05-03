import React from "react";

const Search =  (props) => {
    const {searchInput, setSearchInput} = props;
    // console.log(setSearchInput);
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