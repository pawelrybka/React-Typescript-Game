import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { toggleAddModal } from '../../Redux/AddModalSlice';
import { toggleAlertModal } from '../../Redux/AlertSlice';
import { IoMdAdd } from 'react-icons/io';
import { BsTrash3 } from 'react-icons/bs';
import AddModal from '../AddModal/AddModal';
import AlertModal from '../AlertModal/AlertModal';
import styles from './Footer.module.css';

function Footer() {
  const dispatch = useDispatch();
  const { addModalMounted } = useSelector((state: RootState) => state.addModal);
  const { alertModalMounted } = useSelector(
    (state: RootState) => state.alertModal
  );

  const items = useSelector((state: RootState) => state.list.items);

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__container}>
          <button onClick={() => dispatch(toggleAddModal())}>
            <IoMdAdd size={20} />
            <p>Add new point</p>
          </button>
          {items.length !== 0 ? (
            <button onClick={() => dispatch(toggleAlertModal())}>
              <BsTrash3 size={20} />
              <p>Delete list</p>
            </button>
          ) : null}
        </div>
      </div>
      {addModalMounted && <AddModal />}
      {alertModalMounted && <AlertModal />}
    </>
  );
}

export default Footer;
