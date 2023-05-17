const MovieItem = (props) => {
    const {filteredMovies, handleClick, handleDoubleClick} = props;

    return filteredMovies.map(movie => {
        return movie.expanded ? (
            <li
                key={filteredMovies.indexOf(movie)}
                onDoubleClick={() => handleDoubleClick(movie)}
            >
                {movie.title}
                <p>{movie.overview}</p>
                <button
                    onClick={() => handleClick(movie)}
                >
                    {movie.watchStatus}
                </button>
            </li>
        ) : (
            <li 
                key={filteredMovies.indexOf(movie)}
                onDoubleClick={() => handleDoubleClick(movie)}
            >
                {movie.title}
                <button
                    onClick={() => handleClick(movie)}
                >
                    {movie.watchStatus}
                </button>
            </li>
        )
    })
}

export default MovieItem;