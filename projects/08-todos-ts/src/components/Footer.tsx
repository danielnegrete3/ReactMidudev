import { useTodos } from "../hooks/useTodos"
import { Filters } from "./Filters"

export function Footer({}){
    const {activeTodo,clearCompleted } = useTodos()

    const todoCheck = activeTodo()
    const count  = todoCheck.length > 0


    return (
        <footer className="footer">
            <span className="todo-count">
                {todoCheck.length}
            </span>

            <Filters />

            {
                count && (
                    <button className="clear-completed"
                        onClick={clearCompleted}
                    >Borrar completados </button>
                )
            }
        </footer>
    )
}