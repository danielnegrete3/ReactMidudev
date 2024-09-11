
export function Movies({ movies }){
    const hasMovies = movies?.length > 0

    if(!hasMovies){
        return (
            <h2>No se encontraron peliculas para esta busqueda</h2>
        )
    }

    return (
        <ul className='movies'>
            {
                movies.map(movie=>{
                    return(
                        <li key={movie.id} className='movie'>
                            <h3>{movie.title}</h3>
                            <p>{movie.year}</p>
                            <img src={movie.poster} alt={`Poster of the movie ${movie.title}`} />
                        </li>
                    )
                })
            }
        </ul>
    )
}