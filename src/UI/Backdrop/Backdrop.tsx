import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { motion } from 'framer-motion';
import styles from './Backdrop.module.css';

function Backdrop() {
  const { configurationModalMounted } = useSelector(
    (state: RootState) => state.configurationModal
  );
  const { alertModalMounted } = useSelector(
    (state: RootState) => state.alertModal
  );

  const { addModalMounted } = useSelector((state: RootState) => state.addModal);

  return (
    <motion.div
      className={`${styles.backdrop} ${
        addModalMounted || (configurationModalMounted && alertModalMounted)
          ? styles.zindexup
          : ''
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    ></motion.div>
  );
}

export default Backdrop;
