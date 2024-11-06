import { TODO_FILTERS } from "./consts";

export type TodoId = string;
export type TodoTitle = string;
export type TodoCompleted = boolean;

export interface TodoType {
    id: TodoId,
    title: TodoTitle,
    completed: TodoCompleted
}

export type ListOfTodos = Array<TodoType>;

export type TODO_FILTERS_VALUES = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];