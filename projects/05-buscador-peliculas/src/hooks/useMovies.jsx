
import { getMovies } from '../services/getMovies'
import {useCallback, useState,useRef} from 'react'

export function useMovies({search}){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const previousSearch = useRef(search)

    const newGetMovies = useCallback(async({search})=>{
        if (search === previousSearch.current) return

        try{
            setLoading(true)
            previousSearch.current = search
            let newMovies = await getMovies({search})
            setMovies(newMovies)

        }catch{
            setError('A ocurrido un error ')
        }finally{
            setLoading(false)
        }
    },[])

    return {movies,getMovies:newGetMovies,loading}
}