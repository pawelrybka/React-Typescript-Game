import styles from './AddPointButton.module.css'
import AddPointModal from '../AddPointModal/AddPointModal'
import { useState } from 'react'
import BlurBackground from '../BlurBackground/BlurBackground'


const AddPointButton = () => {
  
  const[active, setActive] = useState(false)
  
  const onClick = () => setActive(!active)

  return (
    <>
      <button className={styles.addPointButton} onClick={onClick}>
        <span>Add new point</span>
      </button>
      <AddPointModal 
        active={active}
        setActive={setActive}
      />
      <BlurBackground 
        visible={active}
      />
    </>
    
  )
}

export default AddPointButton

