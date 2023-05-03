import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { toggleAddModal } from '../../Redux/AddModalSlice';
import { IoMdAdd } from 'react-icons/io';
import { BsTrash3 } from 'react-icons/bs';
import AddModal from '../AddModal/AddModal';
import AlertModal from '../AlertModal/AlertModal';
import styles from './Footer.module.css';

function Footer() {
  const dispatch = useDispatch();
  const { mounted } = useSelector((state: RootState) => state.addModal);
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__container}>
          <button onClick={() => dispatch(toggleAddModal())}>
            <IoMdAdd size={20} />
            <p>Add new point</p>
          </button>
          <button onClick={() => setAlertVisible(!alertVisible)}>
            <BsTrash3 size={20} />
            <p>Delete list</p>
          </button>
        </div>
      </div>
      {mounted && <AddModal />}
      {alertVisible && (
        <AlertModal
          alertVisible={alertVisible}
          setAlertVisible={setAlertVisible}
        />
      )}
    </>
  );
}

export default Footer;
