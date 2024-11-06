import React from "react";
import { type TODO_FILTERS_VALUES } from "../types.d";
import { Filters } from "./Filters";

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: TODO_FILTERS_VALUES
    handleFilterChange: (filter: TODO_FILTERS_VALUES) => void
    onClearCompleted: () => void
}

export const Footer: React.FC<Props> = ({ activeCount = 0, completedCount, filterSelected, handleFilterChange, onClearCompleted }) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>

            <Filters
                filterSelected={filterSelected}
                handleFilterChange={handleFilterChange}
            />

            {
                completedCount > 0 && (
                    <button
                        className="clear-completed"
                        onClick={onClearCompleted}>
                        Borrar completados
                    </button>
                )
            }
        </footer>
    );
};