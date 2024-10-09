import { createContext, ReactNode, useState } from "react";
import { ChangeTodoTextType, FindTodoType, FunctionsTodoType, TodoId, TodoList, Todo, SaveTodoType, TodoText, ChangeComplitedType} from "../types/todoesType";
import { mockTodos } from "../mocks/Todoes";
import { FilterType, TodoFilters } from "../types/filtersType";
import { TODO_FILTERS } from "../const/filters";


export const TodoContext = createContext<FunctionsTodoType | undefined>(undefined)

interface props {
    children : ReactNode
}

export const TodoProvider= ({children} : props)=>{
    const [todos,setTodos] = useState<TodoList>(mockTodos)
    const [todosFiltered, setTodosFiltered] = useState<TodoList>(todos)
    const [isEditing, setIsEditing] = useState("")
    const [filterSelected, setFilterSelected] = useState<TodoFilters>(TODO_FILTERS.ALL)


    const remove = ({id}: TodoId )=>{
        const newTodos =  todos.filter(todo => todo.id !== id)
        updateTodos(newTodos)
    }

    const changeText = ({id, text}: ChangeTodoTextType) =>{
        const newTodos = todos.map(todo => {
            if (todo.id === id){
                return {
                    ...todo,
                    text
                }
            }
            return todo
        })

        updateTodos(newTodos)
    }

    const activeTodo = ()=>{
        return todos.filter(todo => {
            if(todo.completed){
                return todo
            }
        })
    }

    const clearCompleted = ()=>{
        const newTodos = todos.filter(todo =>{
            if (!todo.completed){
                return todo
            }
        })

        updateTodos(newTodos)
    }

    const updateTodos = (newTodos : TodoList)=>{
        setTodos(newTodos)
        handleFilter({filter:filterSelected, newTodos})
    }

    const handleFilter = ({filter, newTodos = todos}:FilterType) =>{
        if(filterSelected != filter)  setFilterSelected(filter)

        const newTodosFiltered = newTodos.filter(todo => {
            if(filter === TODO_FILTERS.ALL) return todo
            if(filter === TODO_FILTERS.ACTIVE && !todo.completed) return todo
            if(filter === TODO_FILTERS.COMPLITED && todo.completed) return todo
        })

        setTodosFiltered(newTodosFiltered)

    }

    const saveTodo = ({text}: TodoText) =>{
        const newTodos = [
            ...todos,
            {id : crypto.randomUUID(),text , completed : false}
        ]
        updateTodos(newTodos)
    }

    const setComplited = ({id, completed} : ChangeComplitedType) => {
        const newTodos = todos.map( todo =>{
            if ( todo.id === id){
                return {...todo, completed : completed}
            }
            return todo
        })

        updateTodos(newTodos)
    }

    return(
        <TodoContext.Provider value={
            {
                todos,
                todosFiltered,
                 remove,
                 isEditing,
                 setIsEditing,
                  changeText,
                  activeTodo,
                  clearCompleted,
                  filterSelected,
                  handleFilter,
                  saveTodo,
                  setComplited
                  }}>
            {children}
        </TodoContext.Provider>
    )
}

