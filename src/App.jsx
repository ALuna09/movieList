import React from "react";
import Search from "./Search.jsx";
import AddMovie from "./AddMovie.jsx";
import Movies from "./Movies.jsx";
import data from "./mockData.js";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
    const [searchInput, setSearchInput] = useState('');
    const [movies, setMovies] = useState([]);
    const [addMovie, setAddMovie] = useState('');
    const [filteredMovies, setFilteredMovies] = useState(movies);

    let count = 0;

    useEffect(() => {
        count++;
        console.log('poop');
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
        
        async function getMovies() {
            try {
                const response = await axios.get(url);
                // console.log(response);
                const moviesFromAPI = response.data.results;
                let newMovieSet = moviesFromAPI.map(movie => {
                    // console.log(movie)
                    return {
                        id: moviesFromAPI.indexOf(movie),
                        title: movie.title,
                        watched: false,
                        watchStatus: 'To Watch',
                        expanded: false,
                        overview: movie.overview
                    }
                })
                setMovies(newMovieSet);
            } catch (err) {
                console.error(err);
            }
        }

        getMovies();

        console.log(count)
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
