import styles from './Backdrop.module.css'

type props = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const BlurBackground = ({visible, setVisible}: props) => {
  
  const handleChange = () => setVisible(!visible)

  return <div onClick={handleChange} className={`${styles.blurBackground} ${visible ? styles.visible : ''}`}></div>
}

export default BlurBackground
