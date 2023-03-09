import styles from './ButtonSection.module.css'
import AddPointButton from '../AddPointButton/AddPointButton'
import DeleteButton from '../DeleteButton/DeleteButton'
import { useContext } from 'react'
import Context from '../Context/Context'


const ButtonSection = () => {
  
  const { todos } = useContext(Context);

  return (
    <div className={styles.buttonSection}>
      <AddPointButton/>
      {todos.length > 0 && <DeleteButton/>}
    </div>
  )
}

export default ButtonSection


