import { createContext } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

type TodosContextType = {
  todos: Todo[];
  selectedTodo: Todo | null;
  setSelectedTodo: (todo: Todo | null) => void;
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

const Context = createContext<TodosContextType>({
  todos: [],
  selectedTodo: null,
  setSelectedTodo: () => {},
  addTodo: () => {},
  removeTodo: () => {},
  toggleCompleted: () => {},
});

export default Context;



