import React from "react";

const Search =  (props) => {
    console.log('Testies', props);
    return (
        <div>
            <input type="text">{props.searchInput}</input>
        </div>
    )
}

export default Search;