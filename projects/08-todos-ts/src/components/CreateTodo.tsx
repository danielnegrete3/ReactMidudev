import React, { useState } from "react"
import { useTodos } from "../hooks/useTodos"


export function CreateTodo({}){
    const [newTodo, setNewTodo] = useState('')
    const {saveTodo} = useTodos()

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e)=>{
        if (e.key === 'Enter' && newTodo !== '') {
            saveTodo({text:newTodo})
            setNewTodo('')
          }
    }
    return (
        <input type="text"  
            className="new-todo"
            autoFocus
            value={newTodo}
            onKeyDown={handleKeyDown}
            onChange={(e) => { setNewTodo(e.target.value)}}
            placeholder="Que quieres hacer?"
        />
    )
}