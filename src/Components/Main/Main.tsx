import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { setSelectedItem } from '../../Redux/MainSlice';
import { toggleConfigurationModal } from '../../Redux/ConfigurationModalSlice';
import { AnimatePresence } from 'framer-motion';
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
          {items.length === 0 ? (
            <div className={styles.welcome__description}>
              <h1>Welcome to Coderoad!</h1>
              <p>
                The application was created to facilitate planning the process
                of learning programming, to add a new point to your list, click
                the button below
              </p>
            </div>
          ) : (
            items.map(item => (
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
                <span>Deadline:</span>
                <span
                  className={`${item.finished ? styles.deadline_finished : ''}`}
                >
                  {item.days < 10 ? `0${item.days}` : item.days}/
                  {item.months < 10 ? `0${item.months}` : item.months}/
                  {item.years}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
      <AnimatePresence>
        {configurationModalMounted && <ConfigurationModal />}
      </AnimatePresence>
    </>
  );
}

export default Main;
