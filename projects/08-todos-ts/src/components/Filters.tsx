import { TODO_FILTERS } from "../const/filters"
import { useTodos } from "../hooks/useTodos"
import { TodoFilters } from "../types/filtersType"

const FILTERS_BUTTONS  = {
    [TODO_FILTERS.ALL]:{ literal : TODO_FILTERS.ALL[0].toUpperCase() + TODO_FILTERS.ALL.slice(1) , href: `/?filter=${TODO_FILTERS.ALL}` },
    [TODO_FILTERS.ACTIVE]:{ literal : TODO_FILTERS.ACTIVE[0].toUpperCase() + TODO_FILTERS.ACTIVE.slice(1) , href: `/?filter=${TODO_FILTERS.ACTIVE}` },
    [TODO_FILTERS.COMPLITED]:{ literal : TODO_FILTERS.COMPLITED[0].toUpperCase() + TODO_FILTERS.COMPLITED.slice(1) , href: `/?filter=${TODO_FILTERS.COMPLITED}` },
} as const 

export function Filters({}){
    const {filterSelected,handleFilter} = useTodos()

    const handleClick = (filter: TodoFilters) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        handleFilter({filter})
      }

    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, {literal,href} ])=>{
                    const className = filterSelected === key ? "selected" : ""
                    return (
                        <li key={key}>
                            <a href={href} className={className} onClick={handleClick(key as TodoFilters)}>{literal}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}