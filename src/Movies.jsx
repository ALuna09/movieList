import MovieItem from "./MovieItem";

const Movies = (props) => {
    const {filteredMovies, setFilteredMovies} = props;

    const handleClick = (movie) => {
        movie.watched = !movie.watched;
        movie.watched ? movie.watchStatus = 'Watched' : movie.watchStatus = 'To Watch'
        setFilteredMovies([...filteredMovies]);
    }

    const handleDoubleClick = (movie) => {
        movie.expanded = !movie.expanded;
        console.log(movie)
        setFilteredMovies([...filteredMovies]);
    }

    return filteredMovies.length ? (
        <ul>
            <MovieItem
                filteredMovies={filteredMovies}
                handleClick={handleClick}
                handleDoubleClick={handleDoubleClick}
            />
        </ul>
    ) : (
        <h1>
            No results by that Title
        </h1>
    )
}

export default Movies;
