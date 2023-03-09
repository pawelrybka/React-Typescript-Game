import { createContext } from "react";

type Todo = {
  id: number;
  text: string;
  days: number;
  weeks: number;
  months: number;
  years: number;
  completed: boolean;
}

type TodosContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo | null) => void;
  toggleCompleted: (id: number | undefined) => void;
  editTodo: (props: string) => void;
  
  selectedTodo: Todo | null;
  setSelectedTodo: (todo: Todo | null) => void;

  addPointModalVisible: boolean;
  setAddPointModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  
  configurationVisible: boolean;
  setConfigurationVisible: React.Dispatch<React.SetStateAction<boolean>>;

  alertVisible: boolean;
  setAlertVisible: React.Dispatch<React.SetStateAction<boolean>>;

}

const Context = createContext<TodosContextType>({
  todos: [],
  setTodos: () => {},

  addTodo: () => {},
  removeTodo: () => {},
  toggleCompleted: () => {},
  editTodo: () => {},

  selectedTodo: null,
  setSelectedTodo: () => {},

  addPointModalVisible: false,
  setAddPointModalVisible: () => {},
  
  configurationVisible: false,
  setConfigurationVisible: () => {},

  alertVisible: false,
  setAlertVisible: () => {},
});

export default Context;




