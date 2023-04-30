import AddModal from '../AddModal/AddModal';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdAdd } from 'react-icons/io';
import { BsTrash3 } from 'react-icons/bs';
import { RootState } from '../../Redux/store';
import { toggleAddModal } from '../../Redux/AddModalSlice';
import { clearList } from '../../Redux/MainSlice';
import styles from './Footer.module.css';

function Footer() {
  const dispatch = useDispatch();
  const { mounted } = useSelector((state: RootState) => state.addModal);

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__container}>
          <button onClick={() => dispatch(toggleAddModal())}>
            <IoMdAdd size={20} />
            <p>Add new point</p>
          </button>
          <button onClick={() => dispatch(clearList())}>
            <BsTrash3 size={20} />
            <p>Delete list</p>
          </button>
        </div>
      </div>
      {mounted && <AddModal />}
    </>
  );
}

export default Footer;
