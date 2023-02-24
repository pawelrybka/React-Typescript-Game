import React from 'react'
import AddPointModal from '../AddPointModal/AddPointModal'
import Backdrop from '../Backdrop/Backdrop'
import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './AddPointButton.module.css'

const AddPointButton = () => {
  
  const[visible, setActive] = useState(false)
  
  const handleClick = () => setActive(!visible)

  return (
    <>
      <button className={styles.addPointButton} onClick={handleClick}>
        <AiOutlinePlusCircle size={40}/>
        <span>Add new point</span>
      </button>
      <AddPointModal 
        visible={visible}
        setVisible={setActive}
      />
      <Backdrop
        visible={visible}
        setVisible={setActive}
      />
    </>
  )
}

export default AddPointButton

