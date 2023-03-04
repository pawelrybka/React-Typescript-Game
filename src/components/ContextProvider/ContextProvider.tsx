import React, { useState, useEffect } from "react";
import styles from './ContextProvider.module.css'
import Context from "../Context/Context";

type Todo = {
  id: number;
  text: string;
  days: number;
  weeks: number;
  months: number;
  years: number;
  completed: boolean;
}

type ListProps = {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ListProps) => {
  
  const [todos, setTodos] = useState<Todo[]>([]);
 
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  useEffect(() => {

    const todoListJson = localStorage.getItem('todos');

    if (todoListJson) {
      const todos = JSON.parse(todoListJson);
      setTodos(todos);
    } else {
      setTodos([]);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (selectedTodo: Todo | null) => {
    if (selectedTodo) {
      setTodos(todos.filter((todo) => todo.id !== selectedTodo.id));
    }
  };

  const toggleCompleted = (id: number | undefined) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const [addPointModalVisible, setAddPointModalVisible] = useState<boolean>(false);

  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  return (
    <div className={styles.root}>
      <Context.Provider value={{ todos, selectedTodo, setSelectedTodo, addTodo, removeTodo, toggleCompleted, addPointModalVisible, setAddPointModalVisible, alertVisible, setAlertVisible }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default ContextProvider;

