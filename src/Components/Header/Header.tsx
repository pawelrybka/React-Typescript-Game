import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <h1>CodeRoad</h1>
        <span>Repository</span>
      </div>
    </div>
  );
}

export default Header;
