import React from 'react'
import styles from './Roadmap.module.css'
import Context from '../Context/Context'
import { useContext } from 'react'
import PointConfiguration from '../PointConfiguration/PointConfiguration'
import { AnimatePresence } from "framer-motion";

const Main = () => {
  
  const { todos, setSelectedTodo, configurationVisible, setConfigurationVisible } = useContext(Context);
  
  return (
    <div className={styles.roadmap}>
      {todos.map((todo) => (
        <button 
          key={todo.id} 
          className={`${styles.point} ${todo.completed ? styles.finished : ''}`} 
          onClick={() => {
            setConfigurationVisible(!configurationVisible)
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
        {configurationVisible && <PointConfiguration/>}
      </AnimatePresence> 
    </div>  
  )
}

export default Main

