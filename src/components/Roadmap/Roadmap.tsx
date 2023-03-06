import React from 'react'
import styles from './Roadmap.module.css'
import Context from '../Context/Context'
import { useContext, useState } from 'react'
import PointConfiguration from '../PointConfiguration/PointConfiguration'
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from '../Backdrop/Backdrop'

type Todo = {
  id: number;
  text: string;
  days: number;
  months: number;
  years: number;
  weeks: number;
  completed: boolean;
}

const Main = () => {
  
  const { todos, setSelectedTodo, selectedTodo } = useContext(Context);
  
  const [visible, setVisible] = useState(false)

  return (
    <div className={styles.roadmap}>
      {todos.map((todo) => (
          <button 
            key={todo.id} 
            className={`${styles.point} ${todo.completed ? styles.finished : ''}`} 
            onClick={() => {
              setVisible(!visible)
              setSelectedTodo(todo);
            }}
          >
            {todo.text}
            <span>To complete:</span>
            <span>{todo.days} days</span>
            <span>{todo.weeks} weeks</span>
            <span>{todo.months} months</span>
            <span>{todo.years} years</span>
            {todo.completed ? <p>Finished</p> : <p>Not Finished</p>}
          </button>
      ))}
      <AnimatePresence>
        {visible && selectedTodo &&
          <>
            <PointConfiguration 
              visible={visible}
              setVisible={setVisible}
              
            />
            <Backdrop
              visible={visible}
              setVisible={setVisible}
            />
          </>  
        }
      </AnimatePresence> 
    </div>  
  )
}

export default Main

