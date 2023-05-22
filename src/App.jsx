import React from "react";
import Search from "./Search.jsx";
import AddMovie from "./AddMovie.jsx";
import Movies from "./Movies.jsx";
import { useState, useEffect } from "react";

const App = () => {
    const [searchInput, setSearchInput] = useState('');
    const [movies, setMovies] = useState([]);
    const [addMovie, setAddMovie] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(movies);
    
    useEffect(() => {
        fetch('http://localhost:4000/api/movies')
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                const moviesFromAPI = data;
                let newMovieSet = moviesFromAPI.map(movie => {
                    return {
                        id: moviesFromAPI.indexOf(movie),
                        title: movie.title,
                        watched: false,
                        watchStatus: 'To Watch',
                        expanded: false,
                        overview: movie.overview
                    }
                });
                setMovies(newMovieSet);
                setFilteredMovies(newMovieSet);
            })
    }, []);
    
    let watchToggleSetting = 'all';
    
    const watchToggle = (setting) => {
        switch (setting) {
            case 'all':
                watchToggleSetting = 'all';
                setFilteredMovies(movies)
                break;
                case 'watched':
                    watchToggleSetting = 'watched';
                    setFilteredMovies(movies.filter(movie => movie.watched))
                    break;
                    case 'to watch':
                        watchToggleSetting = 'to watch';
                        setFilteredMovies(movies.filter(movie => !movie.watched))
                        break;
            default:
                console.log('Something went wrong here...');
                break;
            }
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
                onClick={() => watchToggle('watched')}
                >
                Watched
            </button>
            <button
                onClick={() => watchToggle('to watch')}
                >
                To Watch
            </button>
            <button
                onClick={() => watchToggle('all')}
                >
                Show All
            </button>
            <Movies 
                filteredMovies={filteredMovies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()))}
                setFilteredMovies={setFilteredMovies}
                />
        </div>
    );
}


export default App;