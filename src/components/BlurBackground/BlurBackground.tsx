import styles from './BlurBackground.module.css'

type props = {
  visible: boolean
}


const BlurBackground = ({visible}: props) => {
  return <div className={`${styles.blurBackground} ${visible ? styles.active : ''}`} ></div>
}

export default BlurBackground

