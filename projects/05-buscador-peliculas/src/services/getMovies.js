import results from '../mocks/followResults.json'

const API_KEY = 'f7bbf57e'
const URL = 'http://www.omdbapi.com/?apikey='


export async function getMovies({ search }) {


    const response = await fetch(URL + API_KEY + `&s=${search}`)
    const data = await response.json()
    const searchResult = data.Search

    
    if (searchResult === undefined) {
        return null
    }

    const moviesFormatter = searchResult.map(movie => {
        return {
            title: movie.Title,
            id: movie.imdbID,
            year: movie.Year,
            poster: movie.Poster
        }
    })

    return moviesFormatter;
}