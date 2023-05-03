import { useState } from 'react';
import { toggleAddModal } from '../../Redux/AddModalSlice';
import { addItem } from '../../Redux/MainSlice';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './AddModal.module.css';

function AddModal() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.list.items);
  const [inputValue, setInputValue] = useState('');
  const [days, setDays] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [months, setMonths] = useState(0);

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

  const addDay = () => {
    if (days < 6) {
      setDays(days + 1);
    } else {
      setDays(0);
      setWeeks(weeks + 1);
    }
  };

  const subtractDay = () => {
    if (days > 0) {
      setDays(days - 1);
    } else {
      if (weeks > 0) {
        setDays(6);
        setWeeks(weeks - 1);
      }
    }
  };

  const addWeek = () => {
    setWeeks(weeks + 1);
  };

  const subtractWeek = () => {
    if (weeks > 0) {
      setWeeks(weeks - 1);
    } else {
      if (months > 0) {
        setWeeks(3);
        setMonths(months - 1);
      }
    }
  };

  const addMonth = () => {
    setMonths(months + 1);
  };

  const subtractMonth = () => {
    if (months > 0) {
      setMonths(months - 1);
    }
  };

  const notify = () => {
    toast.success('New point has been added!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const techOnList = () => {
    toast.error('Tech is already in the list', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

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
                  key={tech}
                  type="button"
                  value={tech}
                  onClick={() => setInputValue(tech)}
                />
              ))}
            </div>
            <div className={styles.timesection}>
              <div className={styles.timesection__header}>
                <span>Time to complete:</span>
                <div className={styles.time}>
                  <span>
                    {days > 0 ? (
                      <span>{days === 1 ? `${days} day` : `${days} days`}</span>
                    ) : null}
                  </span>
                  <span>
                    {weeks > 0 ? (
                      <span>
                        {weeks === 1 ? `${weeks} week` : `${weeks} weeks`}
                      </span>
                    ) : null}
                  </span>
                  <span>
                    {months > 0 ? (
                      <span>
                        {months === 1 ? `${months} month` : `${months} months`}
                      </span>
                    ) : null}
                  </span>
                </div>
              </div>
              <div className={styles.timesection__buttons}>
                <button onClick={() => subtractDay()}>-1 Day</button>
                <div>Days</div>
                <button onClick={() => addDay()}>+1 Day</button>
                <button onClick={() => subtractWeek()}>-1 Week</button>
                <div>Weeks</div>
                <button onClick={() => addWeek()}>+1 Week</button>
                <button onClick={() => subtractMonth()}>-1 Month</button>
                <div>Months</div>
                <button onClick={() => addMonth()}>+1 Month</button>
              </div>
            </div>
          </div>
          <button
            className={styles.confirm}
            onClick={() => {
              const trimmedInputValue = inputValue.trim();
              if (!items.some(item => item.name === trimmedInputValue)) {
                dispatch(
                  addItem({
                    name: trimmedInputValue,
                    finished: false,
                    days: days,
                    weeks: weeks,
                    months: months,
                  })
                );
                dispatch(toggleAddModal());
                notify();
              } else {
                techOnList();
              }
            }}
          >
            Confirm roadmap point
          </button>
        </div>
      </div>
      <Backdrop />
    </>
  );
}

export default AddModal;
