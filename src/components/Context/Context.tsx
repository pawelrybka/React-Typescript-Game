import { createContext } from "react";

type Todo = {
  id: number;
  text: string;
  days: number;
  months: number;
  years: number;
  completed: boolean;
}

type TodosContextType = {
  todos: Todo[];
  selectedTodo: Todo | null;
  setSelectedTodo: (todo: Todo | null) => void;
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo | null) => void;
  toggleCompleted: (id: number | undefined) => void;
  addPointModalVisible: boolean;
  setAddPointModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  alertVisible: boolean;
  setAlertVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<TodosContextType>({
  todos: [],
  selectedTodo: null,
  setSelectedTodo: () => {},
  addTodo: () => {},
  removeTodo: () => {},
  toggleCompleted: () => {},
  addPointModalVisible: false,
  setAddPointModalVisible: () => {},
  alertVisible: false,
  setAlertVisible: () => {}
});

export default Context;



