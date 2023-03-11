import React, { useState, useEffect } from "react";
import styles from './ContextProvider.module.css'
import Context from "../Context/Context";

type Todo = {
  id: number;
  text: string;
  days: number;
  weeks: number;
  months: number;
  completed: boolean;
}

type ListProps = {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ListProps) => {
  
  const [todos, setTodos] = useState<Todo[]>([]);
 
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const [addPointModalVisible, setAddPointModalVisible] = useState(false);

  const [configurationVisible, setConfigurationVisible] = useState(false)

  const [alertVisible, setAlertVisible] = useState(false);


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

  const removeTodo = (param: Todo | null) => {
    const updatedTodos = todos.filter(todo => todo !== param);
    setTodos(updatedTodos);
  };

  const toggleCompleted = () => {
    if (selectedTodo !== null) {
      const updatedTodos = todos.map(todo => {
        if (todo.id === selectedTodo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      setTodos(updatedTodos);
    };
  };

  const editTodo = (props: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === selectedTodo?.id) {
        return { ...todo, text: props };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className={styles.root}>
      <Context.Provider value={{ 
        todos, setTodos,
        selectedTodo, setSelectedTodo, 
        addTodo, removeTodo, toggleCompleted, editTodo,
        addPointModalVisible, setAddPointModalVisible, 
        alertVisible, setAlertVisible, 
        configurationVisible, setConfigurationVisible,
      }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default ContextProvider;

