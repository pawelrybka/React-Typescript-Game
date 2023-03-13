import React from 'react'
import styles from './Roadmap.module.css'
import Context from '../Context/Context'
import { useContext } from 'react'
import PointConfiguration from '../PointConfiguration/PointConfiguration'
import { AnimatePresence } from "framer-motion";
import { ImArrowDown } from 'react-icons/im';

const Main = () => {
  
  const { todos, setSelectedTodo, configurationVisible, setConfigurationVisible } = useContext(Context);
  
  if (todos.length === 0) {
    return <div className={styles.noroadmap}>Add some points <ImArrowDown size={40} className={styles.arrowicon}/></div>;
  }

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
          <div className={styles.point__time}>
            {todo.days > 0 ? <span>{todo.days} days &nbsp; </span> : null}
            {todo.weeks > 0 ? <span>{todo.weeks} weeks &nbsp; </span>: null}  
            {todo.months > 0 ? <span>{todo.months} months &nbsp; </span>: null}  
          </div>
          {todo.completed ? <span>Finished</span> : <span>Not Finished</span>}
        </button>
      ))}
    
      <AnimatePresence>
        {configurationVisible && <PointConfiguration/>}
      </AnimatePresence> 
    </div>  
  )
}

export default Main

                  