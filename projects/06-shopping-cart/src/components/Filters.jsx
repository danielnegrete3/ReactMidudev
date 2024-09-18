import {useContext, useId} from 'react'
import './Filters.css'
import { FiltersContext } from '../contexts/FiltersContext'

export function Filters({}){
    const priceRangeId = useId()
    const categoryFilterId = useId()
    const {Filters, setFilters} = useContext(FiltersContext)

    const minPriceCahnge=(event)=>{
        setFilters(prevState  => ({
            ...prevState,
            minPrice: event.target.value
            })
        )
    }

    const categoryChange = (event) =>{
        setFilters(prevState  => ({
            ...prevState,
            category: event.target.value
            })
        )
    }

    return (
        <div className='filter'>
            <label htmlFor={priceRangeId}>Precio minimo</label>
            <input type="range" min={0} max={1000} onChange={minPriceCahnge}/>

            <label htmlFor={categoryFilterId}>Categoria</label>
            <select name="Categoria" id={categoryFilterId} onChange={categoryChange}>
                <option value="All">Todos</option>
                <option value="laptops">Laptops</option>
                <option value="phones">Celulares</option>
            </select>

        </div>
    )
}