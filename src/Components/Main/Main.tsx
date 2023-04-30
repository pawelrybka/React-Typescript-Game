import styles from './Main.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { ListState } from '../../Redux/MainSlice';

function Main() {
  const list = useSelector<RootState, ListState>(state => state.list);

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        {list.items.map((item, index) => (
          <div key={index} className={styles.article}>
            {item.name}
            <span>Time to finish: {item.days}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
