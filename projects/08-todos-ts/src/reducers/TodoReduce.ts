import { TODO_FILTERS } from "../const/filters"
import { FilterType, TodoFilters } from "../types/filtersType"
import { ChangeComplitedType, ChangeTodoTextType, TodoId, TodoList, TodoText } from "../types/todoesType"

export const initializate = {
    sync: false,
    todos: [],
    filterSelected: (() => {
        // read from url query params using URLSearchParams
        const params = new URLSearchParams(window.location.search)
        const filter = params.get('filter') as TodoFilters | null

        if (filter === null) return TODO_FILTERS.ALL
        // check filter is valid, if not return ALL
        return Object
          .values(TODO_FILTERS)
          .includes(filter)
          ? filter
          : TODO_FILTERS.ALL
      })()

} as const 

type Action =
| { type: 'INIT_TODOS', payload: { todos: TodoList}}
| {type:  "REMOVE", payload: {data : TodoId}}
| {type: "CHANGE_TEXT" , payload: {data : ChangeTodoTextType}}
| {type: "SET_COMPLITED" , payload: {data : ChangeComplitedType}}
| {type: "CLEAR_COMPLITED" , payload: {}}
| {type: "SAVE_TODO" , payload: {data : TodoText}}
| {type: "SER_FILTER" , payload: {filter : TodoFilters}}

interface State {
    sync: boolean
    todos: TodoList
    filterSelected: TodoFilters
}

export function TodoReducer(state: State, action: Action){
    if (action.type === 'INIT_TODOS') {
        const { todos } = action.payload
        return {
          ...state,
          sync: false,
          todos
        }
    }

    if (action.type === 'CLEAR_COMPLITED') {
        return {
          ...state,
          sync: true,
          todos: state.todos.filter(todo => !todo.completed)
        }
    }

    if (action.type === 'REMOVE') {
        return {
          ...state,
          sync: true,
          todos: state.todos.filter(todo => {
            if (todo.id !== action.payload.data.id){
                return todo
            }
        } )
        }
    }

    if (action.type === 'CHANGE_TEXT') {
        const {id, text } = action.payload.data

        return {
          ...state,
          sync: true,
          todos: state.todos.map(todo => {
                if (todo.id === id){
                    return {...todo,text : text}
                }
                return todo
            } )
        }
    }

    if (action.type === 'SET_COMPLITED') {
        const {id, completed } = action.payload.data
        return {
          ...state,
          sync: true,
          todos: state.todos.map(todo => {
                if (todo.id === id){
                    return {...todo,completed : completed}
                }
                return todo
            } )
        }
    }

    if (action.type === 'SAVE_TODO') {
        const newTodos = [...state.todos,{
            text: action.payload.data.text,
            completed: false,
            id: crypto.randomUUID()
        }]

        return {
          ...state,
          sync: true,
          todos: newTodos
        }
    }

    if (action.type === 'SER_FILTER') {
        const {filter} = action.payload

        return {
          ...state,
          filterSelected:filter
        }
    } 

    return state
}