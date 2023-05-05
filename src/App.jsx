import React from "react";
import data from "./mockData.js";
import Search from "./Search.jsx";
import Movies from "./Movies.jsx";
import { useState } from "react";

const App = () => {
    const [searchInput, setSearchInput] = useState('');
    const [movies, setMovies] = useState(data);

    return (
        <div>
            <Search 
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <Movies 
                movies={movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()))}
            />
        </div>
    );
}


export default App;