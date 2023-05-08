import React from "react";

const AddMovie = (props) => {
    const {addMovie, setAddMovie, movies, setMovies} = props;

    const movieFormat = {
        id: movies.length,
        title: addMovie,
        watched: false
    };

    return (
        <form 
            onSubmit={e => e.preventDefault(e)}
        >
            <input
                type="text"
                placeholder="Add Movie"
                value={addMovie}
                onChange={e => setAddMovie(e.target.value)}
            ></input>
            <button
                onClick={() => {
                    setMovies([...movies, movieFormat])
                    setAddMovie('')
                }}
            >
                +
            </button>
        </form>
    )
}

export default AddMovie;