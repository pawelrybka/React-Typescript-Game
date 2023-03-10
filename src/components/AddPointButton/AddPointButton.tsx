import React from 'react'
import AddPointModal from '../AddPointModal/AddPointModal'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './AddPointButton.module.css'
import { AnimatePresence } from 'framer-motion'
import Context from '../Context/Context'
import {  useContext } from 'react'

const AddPointButton = () => {
  
  const { addPointModalVisible, setAddPointModalVisible } = useContext(Context);

  return (
    <>
      <button 
        className={styles.addPointButton} 
        onClick={() => setAddPointModalVisible(!addPointModalVisible)}
      >
        <AiOutlinePlusCircle size={40}/>
        <span>Add new point</span>
      </button>
      <AnimatePresence>
        {addPointModalVisible && <AddPointModal/>}
      </AnimatePresence>  
    </>
  )
}

export default AddPointButton

