import React from "react";
import Search from "./Search.jsx";
import AddMovie from "./AddMovie.jsx";
import Movies from "./Movies.jsx";
import { useState } from "react";

const App = () => {
    const [searchInput, setSearchInput] = useState('');
    const [movies, setMovies] = useState([]);
    const [addMovie, setAddMovie] = useState('');
    //TODO Possibly get rid of filteredMovies?
    const [filteredMovies, setFilteredMovies] = useState(movies); //? Truly needed?
    console.log('movies', movies);
    console.log('filtered', filteredMovies);

    let watchToggleSetting = 'all';

    const watchToggle = (setting) => {
        switch (setting) {
            case 'all':
                watchToggleSetting = 'all';
                watchFilter()
                break;
            case 'watched':
                watchToggleSetting = 'watched';
                watchFilter()
                break;
            case 'to watch':
                watchToggleSetting = 'to watch';
                watchFilter()
                break;
            default:
                console.log('Something went wrong here...');
                break;
        }
    }

    const watchFilter = () => {
        setFilteredMovies(movies);
        //TODO See if you can use movies alone to filter

        //! Dis shit is clearly broken
        if (watchToggleSetting === 'watched') {
            setFilteredMovies(movies.filter(movie => movie.watched))
        } else if (watchToggleSetting === 'to watch') {
            setFilteredMovies(movies.filter(movie => !movie.watched))
        } else {
            setFilteredMovies(movies);
        }

        //TODO Hopefully implement search functionality
        
    }

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
                setFilteredMovies={setFilteredMovies}
            />
            <button
                onClick={() => {watchToggle('watched');}}
            >
                Watched
            </button>
            <button
                onClick={() => { watchToggle('to watch');}}
            >
                To Watch
            </button>
            <button
                onClick={() => {watchToggle('all');}}
            >
                Show All
            </button>
            <Movies 
                movies={filteredMovies}
                setMovies={setFilteredMovies}
                filteredMovies={filteredMovies}
                setFilteredMovies={setFilteredMovies}
            />
        </div>
    );
}


export default App;

// movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()))