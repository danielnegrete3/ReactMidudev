import './app.css'
import { Movies } from './components/Movies'
import {useCallback, useState} from 'react'
import debounce from 'debounce';
import { useMovies } from './hooks/useMovies';

function App() {

  const [search, setSearch] = useState('')
  const {movies, getMovies,loading} = useMovies({search})

  const reFreshMovies = useCallback(debounce(({search})=>{
    getMovies({search})},300)
  )
  
  const handleSubmit = async (event)=>{
    event.preventDefault()
    // let {search} = Object.fromEntries(
    //   new window.FormData(event.target)
    // )

      getMovies({search})
  }

  const handleChange = (event)=>{
    let newText = event.target.value
    setSearch(newText) 
    reFreshMovies({search:newText})
  }



  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit} >
          <input name='search' type="text" value={search} onChange={handleChange}  placeholder='Forrest Gump, Avengers'/>
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        { loading? <p>cargando...</p>:<Movies movies={movies}/>}
      </main>
    </div>
  )
}

export default App
