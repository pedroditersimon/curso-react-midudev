
import React from "react";
import { type TodoType, type TodoId, type TodoCompleted } from "../types.d";

interface Props extends TodoType {
    onRemoveTodo: (id: TodoId) => void,
    onToggleCompletedTodo: (id: TodoId, completed: TodoCompleted) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompletedTodo }) => {
    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        onToggleCompletedTodo(id, event.target.checked);
    };

    return (
        <>
            <div className='view'>
                <input
                    className='toggle'
                    checked={completed}
                    type='checkbox'
                    onChange={handleChangeCheckbox}
                />
                <label>{title}</label>
                <button className='destroy' onClick={() => onRemoveTodo(id)} ></button>
            </div>

            <input
                className='edit'

            />
        </>

    );
};