import styles from './AddPointButton.module.css'
import AddPointModal from '../AddPointModal/AddPointModal'
import { useState } from 'react'
import BlurBackground from '../BlurBackground/BlurBackground'
import { AiOutlinePlusCircle } from 'react-icons/ai';

const AddPointButton = () => {
  
  const[active, setActive] = useState(false)
  
  const handleClick = () => setActive(!active)

  return (
    <>
      <button className={styles.addPointButton} onClick={handleClick}>
        <AiOutlinePlusCircle size={40}/>
        <span>Add new point</span>
      </button>
      <AddPointModal 
        active={active}
        setActive={setActive}
      />
      <BlurBackground 
        active={active}
        setActive={setActive}
      />
    </>
  )
}

export default AddPointButton

