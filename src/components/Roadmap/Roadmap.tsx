import React from 'react'
import styles from './Roadmap.module.css'
import Context from '../Context/Context'
import { useContext, useState } from 'react'
import PointConfiguration from '../PointConfiguration/PointConfiguration'
import { AnimatePresence } from "framer-motion";
import Backdrop from '../Backdrop/Backdrop'

const Main = () => {
  
  const { todos } = useContext(Context);
  
  const [visible, setVisible] = useState(false)

  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const a = todos.find(todo => todo.id === selectedItemId)

  const handleClick = (todoId: number) => {
    setVisible(!visible)
    setSelectedItemId(todoId);
  }
  
  return (
    <div className={styles.roadmap}>
      {todos.map((todo) => (
        <button key={todo.id} className={styles.point} onClick={() => handleClick(todo.id)}>
          {todo.text}
        </button>
      ))}
      <AnimatePresence>
        {visible &&
          <>
            <PointConfiguration 
              visible={visible}
              setVisible={setVisible}
              todo={a}
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

