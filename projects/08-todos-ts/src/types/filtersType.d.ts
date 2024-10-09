import { TODO_FILTERS } from "../const/filters";
import { TodoList } from "./todoesType";

export type TodoFilters = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export interface FilterType{
    filter : TodoFilters
    newTodos : TodoList
}