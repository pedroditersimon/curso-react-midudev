import { useState } from "react";
import { Todos } from "./components/Todos";
import { type TodoId, type TodoCompleted, type TODO_FILTERS_VALUES, type TodoTitle } from "./types.d";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const mockTodos = [
  {
    id: '1',
    title: "todo 1",
    completed: true
  },
  {
    id: '2',
    title: "todo 2",
    completed: false
  },
  {
    id: '3',
    title: "todo 3",
    completed: false
  }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<TODO_FILTERS_VALUES>(TODO_FILTERS.ALL);

  const handleRemove = (id: TodoId) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (id: TodoId, completed: TodoCompleted) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: TODO_FILTERS_VALUES) => {
    setFilterSelected(filter);
  };

  const handleAddTodo = (title: TodoTitle) => {
    const newTodo = {
      title: title,
      id: crypto.randomUUID(),
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed;
    }

    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed;
    }

    return true;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;


  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onRemoveTodo={handleRemove}
        onToggleCompletedTodo={handleCompleted}
        todos={filteredTodos}
      />
      <Footer
        handleFilterChange={handleFilterChange}
        completedCount={completedCount}
        activeCount={activeCount}
        filterSelected={filterSelected}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default App;
