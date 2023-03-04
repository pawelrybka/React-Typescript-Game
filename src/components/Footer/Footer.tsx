import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/pawelrybka/CodeRoad.git" target='_blank'>
        <span >&lt; Check the code here! /&gt;</span>
      </a>
    </div>
  )
}

export default Footer

