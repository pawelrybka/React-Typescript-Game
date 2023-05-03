import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RootState } from '../../Redux/store';
import { useSelector } from 'react-redux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './ConfigurationModal.module.css';

interface Props {
  configuratinVisible: boolean;
  setConfigurationVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function ConfigurationModal({
  configuratinVisible,
  setConfigurationVisible,
}: Props) {
  const [finished, setFinished] = useState(false);

  const selectedItem = useSelector(
    (state: RootState) => state.list.selectedItem
  );

  return (
    <>
      <div className={styles.pointconfiguration}>
        <div className={styles.pointconfiguration__header}>
          <h2>{selectedItem?.name}</h2>
          <button onClick={() => setConfigurationVisible(!configuratinVisible)}>
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
                <p>Title:</p>
                <button>Edit name and time</button>
              </div>
            </div>

            <div className={styles.configuration__edit}>
              <div
                className={`${styles.container} ${
                  finished ? styles.finished : ''
                }`}
              >
                <p>Finished</p>
                <button onClick={() => setFinished(!finished)}>
                  Marked as finished
                </button>
              </div>
            </div>

            <button className={styles.configuration__delete}>
              Delete roadmap point
            </button>
            <button
              className={styles.configuration__close}
              onClick={() => setConfigurationVisible(!configuratinVisible)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <Backdrop />
    </>
  );
}

export default ConfigurationModal;
