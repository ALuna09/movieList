import React from "react";

const AddMovie = (props) => {
    const {addMovie, setAddMovie, movies, setMovies, setFilteredMovies} = props;

    const movieFormat = {
        id: movies.length,
        title: addMovie,
        watched: false,
        watchStatus: 'To Watch',
        expanded: false,
        overview: ''
    };

    return (
        <form 
            onSubmit={e => {
                e.preventDefault(e)
                setAddMovie('')
            }}
        >
            <input
                type="text"
                placeholder="Add Movie"
                value={addMovie}
                onChange={e => setAddMovie(e.target.value)}
            />
            <button
                onClick={() => {
                    setMovies([...movies, movieFormat]);
                    setFilteredMovies([...movies, movieFormat])
                }}
            >
                +
            </button>
        </form>
    )
}

export default AddMovie;