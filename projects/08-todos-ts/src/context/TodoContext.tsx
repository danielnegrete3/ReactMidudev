import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { ChangeTodoTextType, FindTodoType, FunctionsTodoType, TodoId, TodoList, Todo, SaveTodoType, TodoText, ChangeComplitedType} from "../types/todoesType";
import { mockTodos } from "../mocks/Todoes";
import { FilterType, TodoFilters } from "../types/filtersType";
import { TODO_FILTERS } from "../const/filters";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { initializate, TodoReducer } from "../reducers/TodoReduce";
import { CreateBin, ReadBin } from "../services/jsonBin";


export const TodoContext = createContext<FunctionsTodoType | undefined>(undefined)

interface props {
    children : ReactNode
}

export const TodoProvider= ({children} : props)=>{
    const [{sync,todos,filterSelected},dispatch] = useReducer(TodoReducer,initializate)
    // const [todos,setTodos] = useState<TodoList>(mockTodos)
    const [todosFiltered, setTodosFiltered] = useState<TodoList>([])

    const [isEditing, setIsEditing] = useState("")
    // const [filterSelected, setFilterSelected] = useState<TodoFilters>(TODO_FILTERS.ALL)
    const [isEnableAnimations, setIsEnableAnimations] = useState(true)
    const [parent, enableAnimations] = useAutoAnimate()


    const remove = ({id}: TodoId )=>{
        // const newTodos =  todos.filter(todo => todo.id !== id)
        // updateTodos(newTodos)

        dispatch({type:"REMOVE" , payload: {data:{id}}})
    }

    const changeText = ({id, text}: ChangeTodoTextType) =>{
        // const newTodos = todos.map(todo => {
        //     if (todo.id === id){
        //         return {
        //             ...todo,
        //             text
        //         }
        //     }
        //     return todo
        // })

        // updateTodos(newTodos)

        dispatch({type:"CHANGE_TEXT" , payload: {data:{id,text}}})
    }

    const activeTodo = ()=>{
        return todos.filter(todo => {
            if(todo.completed){
                return todo
            }
        })
    }

    const clearCompleted = ()=>{
        // const newTodos = todos.filter(todo =>{
        //     if (!todo.completed){
        //         return todo
        //     }
        // })

        // updateTodos(newTodos)
        dispatch({type:"CLEAR_COMPLITED" , payload: {}})
    }

    // const updateTodos = (newTodos : TodoList)=>{
    //     // setTodos(newTodos)
    //     handleFilter({filter:filterSelected, newTodos})
    // }

    const handleFilter = ({filter, newTodos = todos}:FilterType) =>{
        if(filterSelected != filter)  /*setFilterSelected(filter)*/ dispatch({type:"SER_FILTER", payload: {filter}})

        const newTodosFiltered = newTodos.filter(todo => {
            if(filter === TODO_FILTERS.ALL) return todo
            if(filter === TODO_FILTERS.ACTIVE && !todo.completed) return todo
            if(filter === TODO_FILTERS.COMPLITED && todo.completed) return todo
        })

        setTodosFiltered(newTodosFiltered)

    }

    const saveTodo = ({text}: TodoText) =>{
        // const newTodos = [
        //     ...todos,
        //     {id : crypto.randomUUID(),text , completed : false}
        // ]
        // updateTodos(newTodos)

        dispatch({type:"SAVE_TODO" , payload: {data:{text}}})
    }

    const setComplited = ({id, completed} : ChangeComplitedType) => {
        // const newTodos = todos.map( todo =>{
        //     if ( todo.id === id){
        //         return {...todo, completed : completed}
        //     }
        //     return todo
        // })

        // updateTodos(newTodos)
        dispatch({type:"SET_COMPLITED" , payload: {data:{id, completed}}})
    }

    const changeEnableAnimation = () => {
        const newBool = !isEnableAnimations
        enableAnimations(newBool)
        setIsEnableAnimations(newBool)
    }

    useEffect(() => {
        ReadBin().then((todos) => {
            dispatch({type:"INIT_TODOS", payload: {todos}})
            setTodosFiltered(todos)
        }).catch(
            err => console.error(err)
        )
    },[])

    useEffect(()=>{
        handleFilter({filter:filterSelected, newTodos:todos})
        if(sync){
            CreateBin({Todos: todos}).then(res => {if(!res) console.error("Fallo al actualizar los todos")})
        }
    },[todos,sync])

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
                  setComplited,
                  parent,
                  isEnableAnimations,
                  changeEnableAnimation
                  }}>
            {children}
        </TodoContext.Provider>
    )
}

