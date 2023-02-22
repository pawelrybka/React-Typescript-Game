import styles from './Point.module.css'

const Point = () => {
  
  const items = ['Item 1','Item 2','Item 3','Item 4','Item 5'];

  const items2 = items.forEach(item => <button>{item}</button>)

  return (
    <div className={styles.point}>{items}</div>
  )
}

export default Point

