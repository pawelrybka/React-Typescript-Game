import { TodosContextType } from "../../assets/types";
import { createContext } from "react";

const Context = createContext<TodosContextType>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},

});

export default Context;



