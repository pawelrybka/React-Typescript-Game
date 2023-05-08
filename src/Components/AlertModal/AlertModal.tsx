import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { clearList, removeItem, setSelectedItem } from '../../Redux/MainSlice';
import { toggleAlertModal } from '../../Redux/AlertSlice';
import { AiOutlineClose } from 'react-icons/ai';
import { toggleConfigurationModal } from '../../Redux/ConfigurationModalSlice';
import { motion } from 'framer-motion';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './AlertModal.module.css';

function AlertModal() {
  const dispatch = useDispatch();
  const selectedItem = useSelector(
    (state: RootState) => state.list.selectedItem
  );

  return (
    <>
      <motion.div
        className={styles.alert}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.alert__header}>
          <h3>Delete roadmap point</h3>
          <button onClick={() => dispatch(toggleAlertModal())}>
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className={styles.alert__content}>
          <span>Do You want to delete this point ?</span>
          <div className={styles.buttonsection}>
            <button
              className={styles.no}
              onClick={() => dispatch(toggleAlertModal())}
            >
              No
            </button>
            <button
              className={styles.yes}
              onClick={() => {
                selectedItem
                  ? (dispatch(removeItem(selectedItem)),
                    dispatch(setSelectedItem(null)),
                    dispatch(toggleAlertModal()),
                    dispatch(toggleConfigurationModal()))
                  : (dispatch(clearList()), dispatch(toggleAlertModal()));
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </motion.div>
      <Backdrop />
    </>
  );
}
export default AlertModal;
