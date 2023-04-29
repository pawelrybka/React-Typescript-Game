import { useState } from 'react';
import { toggleAddModal } from '../../Redux/AddModalSlice';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './AddModal.module.css';

function AddModal() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const tech = [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React',
    'Vue',
    'Tailwind',
    'SASS',
  ];

  return (
    <>
      <div className={styles.addpointmodal}>
        <div className={styles.addpointmodal__header}>
          <h3>Add roadmap point</h3>
          <button onClick={() => dispatch(toggleAddModal())}>
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className={styles.addpointmodal__content}>
          <div className={styles.panel}>
            <form className={styles.form}>
              <label>Roadmap point title</label>
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />
            </form>
            <p>Suggestions:</p>
            <div className={styles.buttons}>
              {tech.map(tech => (
                <input
                  type="button"
                  value={tech}
                  onClick={() => setInputValue(tech)}
                />
              ))}
            </div>
            <div className={styles.timesection}>
              <div className={styles.timesection__header}>
                <span>Time to complete:</span>
              </div>
              <div className={styles.timesection__buttons}>
                <button>-1 Day</button>
                <div>Days</div>
                <button>+1 Day</button>
                <button>-1 Week</button>
                <div>Weeks</div>
                <button>+1 Week</button>
                <button>-1 Month</button>
                <div>Months</div>
                <button>+1 Month</button>
              </div>
            </div>
          </div>
          <button className={styles.confirm}>Confirm roadmap point</button>
        </div>
      </div>
      <Backdrop />
    </>
  );
}

export default AddModal;
