import styles from './BlurBackground.module.css'

type props = {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const BlurBackground = ({active, setActive}: props) => {
  
  const handleChange = () => setActive(!active)

  return <div onClick={handleChange} className={`${styles.blurBackground} ${active ? styles.visible : ''}`}></div>
}

export default BlurBackground

