import React from "react";
import data from "./mockData.js";
import Search from "./Search.jsx";
import AddMovie from "./AddMovie.jsx";
import Movies from "./Movies.jsx";
import { useState } from "react";

const App = () => {
    const [searchInput, setSearchInput] = useState('');
    const [movies, setMovies] = useState([]);
    const [addMovie, setAddMovie] = useState('');

    return (
        <div>
            <Search 
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <AddMovie 
                addMovie={addMovie}
                setAddMovie={setAddMovie}
                movies={movies}
                setMovies={setMovies}
            />
            <Movies 
                movies={movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()))}
            />
        </div>
    );
}


export default App;