import React from 'react'
import styles from './Roadmap.module.css'
import TodosContext from '../Context/Context'
import { useContext } from 'react'

const Roadmap = () => {
  
  const { todos } = useContext(TodosContext);

  return (
    <div className={styles.roadmap}>
      {todos.length === 0 ? (
        <p>No roadmap points</p>
      ) : (
        todos.map(todo => (
          <button key={todo.id} className={styles.point}>
            {todo.text}
          </button>
        ))
      )}
    </div> 
  )
}

export default Roadmap

