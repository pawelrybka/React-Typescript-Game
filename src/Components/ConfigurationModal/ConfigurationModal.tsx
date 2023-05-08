import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editItem, setSelectedItem } from '../../Redux/MainSlice';
import { toggleAddModal } from '../../Redux/AddModalSlice';
import { toggleAlertModal } from '../../Redux/AlertSlice';
import { toggleConfigurationModal } from '../../Redux/ConfigurationModalSlice';
import { motion } from 'framer-motion';
import { RootState } from '../../Redux/store';
import { AiOutlineClose } from 'react-icons/ai';

import AddModal from '../AddModal/AddModal';
import AlertModal from '../AlertModal/AlertModal';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './ConfigurationModal.module.css';

function ConfigurationModal() {
  const dispatch = useDispatch();
  const { alertModalMounted } = useSelector(
    (state: RootState) => state.alertModal
  );
  const selectedItem = useSelector(
    (state: RootState) => state.list.selectedItem
  );
  const { addModalMounted } = useSelector((state: RootState) => state.addModal);

  const [finished, setFinished] = useState(selectedItem?.finished || false);

  function handleCompleteItem() {
    if (selectedItem) {
      const updatedItem = { ...selectedItem, finished: !finished };
      dispatch(editItem(updatedItem));
      setFinished(!finished);
    }
  }

  return (
    <>
      <motion.div
        className={styles.pointconfiguration}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.pointconfiguration__header}>
          <h2>{selectedItem?.name}</h2>
          <button
            className={styles.configuration__close}
            onClick={() => {
              dispatch(setSelectedItem(null));
              dispatch(toggleConfigurationModal());
            }}
          >
            <AiOutlineClose size={20} />
          </button>
        </div>

        <div className={styles.pointconfiguration__content}>
          <div className={styles.midpoints}>
            <p>No midpoints for this roadmap point.</p>
          </div>

          <div className={styles.configuration}>
            <div className={styles.configuration__edit}>
              <div className={styles.container}>
                <p>Title</p>
                <button onClick={() => dispatch(toggleAddModal())}>
                  Edit name and time
                </button>
              </div>
            </div>

            <div className={styles.configuration__edit}>
              <div
                className={`${styles.container} ${
                  finished ? styles.finished : ''
                }`}
              >
                <p>{finished ? 'Finished' : 'Not Finished'}</p>
                <button onClick={handleCompleteItem}>Marked as finished</button>
              </div>
            </div>

            <button
              onClick={() => dispatch(toggleAlertModal())}
              className={styles.configuration__delete}
            >
              Delete roadmap point
            </button>
            <button
              className={styles.configuration__close}
              onClick={() => {
                dispatch(setSelectedItem(null));
                dispatch(toggleConfigurationModal());
              }}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
      <Backdrop />
      {alertModalMounted && <AlertModal />}
      {addModalMounted && <AddModal />}
    </>
  );
}

export default ConfigurationModal;
