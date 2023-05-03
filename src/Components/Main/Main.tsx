import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/store';
import { ListState } from '../../Redux/MainSlice';
import { setSelectedItem } from '../../Redux/MainSlice';
import ConfigurationModal from '../ConfigurationModal/ConfigurationModal';
import styles from './Main.module.css';

function Main() {
  const dispatch = useDispatch();
  const list = useSelector<RootState, ListState>(state => state.list);
  const [configuratinVisible, setConfigurationVisible] = useState(false);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__container}>
          {list.items.map((item, index) => (
            <div
              key={index}
              className={styles.article}
              onClick={() => {
                dispatch(setSelectedItem(item));
                setConfigurationVisible(!configuratinVisible);
              }}
            >
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
      {configuratinVisible && (
        <ConfigurationModal
          configuratinVisible={configuratinVisible}
          setConfigurationVisible={setConfigurationVisible}
        />
      )}
    </>
  );
}

export default Main;
