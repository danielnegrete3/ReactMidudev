import React from "react"
import { TodoFilters } from "./filtersType"

export interface Todo {
    id : string,
    text: string,
    completed: boolean
} 

export type TodoId = Pick<Todo, "id">
export type TodoText = Pick<Todo, "text">
export type TodoCompleted = Pick<Todo, "completed">

export type TodoList = Todo[]

export interface FindTodoType {
    todos: TodoList,
    id: Todo.id
}

export type ChangeComplitedType = Pick<Todo, "id" | "completed">

export interface SaveTodoType {
    todo: Todo
}

export type ChangeTodoTextType = Pick<Todo, "id"| "text">

export interface FunctionsTodoType{
    todos: TodoList
    todosFiltered: TodoList
    isEditing: string
    setIsEditing: React.Dispatch<React.SetStateAction<string>>
    remove: ({id}:TodoId) => void
    changeText: ({id,text}: ChangeTodoTextType) => void
    activeTodo: () => TodoList
    clearCompleted : () => void
    filterSelected: TodoFilters
    handleFilter : ({filter}:FilterType) => void
    saveTodo: ({text}: TodoText) => void
    setComplited: ({id, completed} : ChangeComplitedType) => void
    parent: React.RefCallback<Element>
    changeEnableAnimation: () => void
    isEnableAnimations: boolean
}
