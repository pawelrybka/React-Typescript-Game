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
            <span>{item.name}</span>
            <span>Time to finish:</span>
            {item.days === 0 ? null : (
              <span>
                {item.days === 1 ? `${item.days} day` : `${item.days} days`}
              </span>
            )}
            {item.weeks === 0 ? null : (
              <span>
                {item.weeks === 1
                  ? `${item.weeks} week`
                  : `${item.weeks} weeks`}
              </span>
            )}
            {item.months === 0 ? null : (
              <span>
                {item.months === 1
                  ? `${item.months} month`
                  : `${item.months} months`}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
