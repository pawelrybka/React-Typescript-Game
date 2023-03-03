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
  completed: boolean;
}

const Main = () => {
  
  const { todos, setSelectedTodo } = useContext(Context);
  
  const [visible, setVisible] = useState(false)

  const handleClick = (todo: Todo) => {
    setVisible(!visible)
    setSelectedTodo(todo);
  }
  
  return (
    <div className={styles.roadmap}>
      {todos.map((todo) => (
        <AnimatePresence>
          <motion.button 
            whileHover={{ scale: 1.1, borderColor: "#ffffff" }}
            key={todo.id} 
            className={styles.point} 
            onClick={() => handleClick(todo)}
          >
            {todo.text}
            <span>To complete:</span>
            <span>{todo.days} days</span>
            <span>{todo.months} months</span>
            <span>{todo.years} years</span>
            {todo.completed ? <p>Finished</p> : <p>Not Finished</p>}
          </motion.button>
        </AnimatePresence> 
      ))}
      <AnimatePresence>
        {visible &&
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

