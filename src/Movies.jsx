import React from 'react';

const Movies = (props) => {
    let {movies} = props;
    
    return movies.length ? (
        <ul>
            {movies.map(movie => <li key={movies.indexOf(movie)}>{movie.title}</li>)}
        </ul>
    ) : (
        <h1>
            No results by that Title
        </h1>
    )
}

export default Movies;
// return (
//     <ul>
//         {movies.map(movie => <li key={movies.indexOf(movie)}>{movie.title}</li>)}
//     </ul>
// );