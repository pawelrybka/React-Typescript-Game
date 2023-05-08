import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import styles from './Backdrop.module.css';

function Backdrop() {
  const { configurationModalMounted } = useSelector(
    (state: RootState) => state.configurationModal
  );
  const { alertModalMounted } = useSelector(
    (state: RootState) => state.alertModal
  );

  return (
    <div
      className={`${styles.backdrop} ${
        configurationModalMounted && alertModalMounted ? styles.zindexup : ''
      }`}
    ></div>
  );
}

export default Backdrop;
