import React, { useState } from "react";
import styles from './ContextProvider.module.css'
import Context from "../Context/Context";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

type ListProps = {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ListProps) => {
  
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className={styles.root}>
      <Context.Provider value={{ todos, selectedTodo, setSelectedTodo, addTodo, removeTodo, toggleCompleted }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default ContextProvider;

