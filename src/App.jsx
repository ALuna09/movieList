import React from "react";
import data from "./mockData.js";
import Search from "./Search.jsx";
import Movies from "./Movies.jsx";
import { useState } from "react";

const App = () => {
    const [searchInput, setSearchInput] = useState('');
    const [movies, setMovies] = useState(data);
    const [filteredMovies, setFilteredMovies] = useState(movies);

    const movieFilter = (searchInput) => {
        const listOfFilteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()));

        console.log('filtered', listOfFilteredMovies);
        setFilteredMovies(listOfFilteredMovies);
    }

    return (
        <div>
            <Search 
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                movieFilter={movieFilter}
            />
            <Movies 
                movies={filteredMovies}
            />
        </div>
    );
}


export default App;