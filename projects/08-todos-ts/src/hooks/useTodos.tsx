import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { FunctionsTodoType } from "../types/todoesType";

export function useTodos(){
    const context:FunctionsTodoType | undefined = useContext(TodoContext)

    return context
}