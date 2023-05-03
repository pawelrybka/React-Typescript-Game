import styles from './AlertModal.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { useDispatch } from 'react-redux';
import { clearList } from '../../Redux/MainSlice';
import { toggleAlertModal } from '../../Redux/AlertSlice';

function AlertModal() {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.alert}>
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
                dispatch(clearList());
                dispatch(toggleAlertModal());
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
      <Backdrop />
    </>
  );
}
export default AlertModal;
