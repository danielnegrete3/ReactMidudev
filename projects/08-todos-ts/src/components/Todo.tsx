import React, { useEffect, useRef, useState } from "react";
import { type Todo as Todotype} from "../types/todoesType";
import { useTodos } from "../hooks/useTodos";

interface Props {
    todo: Todotype
}

export const Todo:React.FC<Props> = ({
    todo
}) =>{
    const {remove,setIsEditing, isEditing, changeText,setComplited} = useTodos()
    const changeTitle = useRef<HTMLInputElement>(null)
    const [editedTitle, setEditedTitle] = useState(todo.text)

    const handleKeyDown  : React.KeyboardEventHandler<HTMLInputElement> = 
        (e) :void=>{
            if(e.key === "Enter"){
                setEditedTitle(editedTitle.trim())
                if ( editedTitle !== todo.text)
                {
                    changeText({id:todo.id,text:editedTitle})
                }
                if (editedTitle === '') remove({id:todo.id})
                
                setIsEditing('')
            }

            if (e.key === 'Escape') {
                setEditedTitle(todo.text)
                setIsEditing('')
            }
    }

    const handleChecked : React.ChangeEventHandler<HTMLInputElement> = (e):void => {
        setComplited({id : todo.id, completed : e.target.checked})
    }

    useEffect(() =>{
        changeTitle.current?.focus()
    }, [isEditing])

    return (
        <>
            <div className="view">
                <input type="checkbox" className="toggle" checked={todo.completed} onChange={handleChecked}/>
                <label htmlFor="">{todo.text}</label>
                <button className="destroy" onClick={()=>remove({id:todo.id})}></button>
            </div>

            <input
                className='edit'
                value={editedTitle}
                onChange={(e) => { setEditedTitle(e.target.value) }}
                onKeyDown={handleKeyDown}
                onBlur={() => { setIsEditing('')}}
                ref={changeTitle}
            />
        </>
    )
}