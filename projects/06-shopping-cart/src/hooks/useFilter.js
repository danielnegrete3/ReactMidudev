import { useContext } from "react"
import { FiltersContext } from "../contexts/FiltersContext"

export function useFilter(){
    const {filters,setFilters} = useContext(FiltersContext)

    const filterArticles = (products)=>{
        return products.filter(product =>{
            return (
                product.price>=filters.minPrice &&
                (
                    filters.category == 'All' ||
                    product.category == filters.category
                )
            )
        })
    }

    return {filterArticles,filters,setFilters}

}