import React from 'react'
import AddPointModal from '../AddPointModal/AddPointModal'
import Backdrop from '../Backdrop/Backdrop'
import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './AddPointButton.module.css'
import { AnimatePresence } from 'framer-motion'

const AddPointButton = () => {
  
  const[visible, setVisible] = useState(false)
  
  return (
    <>
      <button className={styles.addPointButton} onClick={() => setVisible(!visible)}>
        <AiOutlinePlusCircle size={40}/>
        <span>Add new point</span>
      </button>
      <AnimatePresence>
        {visible && 
          <>
            <AddPointModal 
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
    </>
  )
}

export default AddPointButton

