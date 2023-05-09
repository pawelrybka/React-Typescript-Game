import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <h2>Coderoad</h2>
        <a href="https://github.com/pawelrybka/CodeRoad">Repository</a>
      </div>
    </div>
  );
}

export default Header;
