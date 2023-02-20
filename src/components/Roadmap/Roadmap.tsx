import styles from './Roadmap.module.css'
import Point from '../Point/Point'

const items = ['Item 1','Item 2','Item 3','Item 4','Item 5','sraka'];

let itemList: JSX.Element[] = [];

items.forEach((elem)=> itemList.push( <Point elem={elem}/> ))

const Roadmap = () => {
  
  return (
    <div className={styles.roadmap}>
      
    
      {itemList}
      
      
      {/* <p>No roadmap points</p> */}
      
    </div>
  )
}

export default Roadmap

