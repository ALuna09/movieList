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
        setFilteredMovies(movies.filter(movie => {
            let title = movie.title.toLowerCase();
            let lowerCaseSearch = searchInput.toLowerCase();

            title.includes(lowerCaseSearch);
            
        }))  
    }

    return (
        <div>
            <Search 
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                onChange={() => movieFilter(searchInput)}
            />
            <Movies 
                movies={filteredMovies}
            />
        </div>
    );
}


export default App;