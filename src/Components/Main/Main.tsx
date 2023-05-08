import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { setSelectedItem } from '../../Redux/MainSlice';
import { toggleConfigurationModal } from '../../Redux/ConfigurationModalSlice';
import ConfigurationModal from '../ConfigurationModal/ConfigurationModal';
import styles from './Main.module.css';

function Main() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.list.items);
  const { configurationModalMounted } = useSelector(
    (state: RootState) => state.configurationModal
  );

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__container}>
          {items.map(item => (
            <div
              key={item.id}
              className={`${styles.article} ${
                item.finished ? styles.finished : ''
              }`}
              onClick={() => {
                dispatch(setSelectedItem(item));
                dispatch(toggleConfigurationModal());
              }}
            >
              <span>{item.name}</span>
              <span>{item.finished ? 'Finished' : 'Not finished'}</span>
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
      {configurationModalMounted && <ConfigurationModal />}
    </>
  );
}

export default Main;
