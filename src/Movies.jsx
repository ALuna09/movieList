import React from 'react';

const Movies = (props) => {
    let {movies} = props;
    
    return (
        <ul>
            {movies.map(movie => <li key={movies.indexOf(movie)}>{movie.title}</li>)}
        </ul>
    );
}

export default Movies;