import AddModal from '../AddModal/AddModal';
import { IoMdAdd } from 'react-icons/io';
import { BsTrash3 } from 'react-icons/bs';
import styles from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__container}>
          <button>
            <IoMdAdd size={20} />
            <p>Add new point</p>
          </button>
          <button>
            <BsTrash3 size={20} />
            <p>Delete list</p>
          </button>
        </div>
      </div>
      <AddModal />
    </>
  );
}

export default Footer;
