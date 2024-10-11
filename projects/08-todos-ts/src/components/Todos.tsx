import { TodoList } from "../types/todoesType"
import {Todo} from "./Todo"
import { useTodos } from "../hooks/useTodos"

interface Props {
    todos :TodoList
}

export const Todos:React.FC<Props> = ({
    todos
}) =>
{
    const {isEditing,setIsEditing,parent} = useTodos()

    return (
        <ul className="todo-list" ref={parent}>
            {
                todos?.map((todo)=>{
                return (
                <li key={todo.id}
                onDoubleClick={()=>{setIsEditing(todo.id)}}
                    className={`
                        ${todo.completed ? 'completed' : ''}
                        ${isEditing === todo.id ? 'editing' : ''}
                    `}
                >
                    <Todo todo={todo}/>
                </li>
                )
            })
            }
        </ul>
    )
}