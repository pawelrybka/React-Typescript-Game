import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { clearList, removeItem } from '../../Redux/MainSlice';
import { toggleAlertModal } from '../../Redux/AlertSlice';
import { AiOutlineClose } from 'react-icons/ai';
import { toggleConfigurationModal } from '../../Redux/ConfigurationModalSlice';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './AlertModal.module.css';

function AlertModal() {
  const dispatch = useDispatch();
  const selectedItem = useSelector(
    (state: RootState) => state.list.selectedItem
  );

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
                selectedItem
                  ? (dispatch(removeItem(selectedItem)),
                    dispatch(toggleAlertModal()),
                    dispatch(toggleConfigurationModal()))
                  : (dispatch(clearList()), dispatch(toggleAlertModal()));
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
