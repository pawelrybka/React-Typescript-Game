import styles from './Point.module.css'

type props ={
  elem: string
}

const Point = ({elem}: props) => {
  return (
    <div className={styles.point}>{elem}</div>
  )
}

export default Point

