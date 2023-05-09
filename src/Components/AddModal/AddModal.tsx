import { useState } from 'react';
import { toggleAddModal } from '../../Redux/AddModalSlice';
import { toggleConfigurationModal } from '../../Redux/ConfigurationModalSlice';
import { addItem, editItem } from '../../Redux/MainSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { RootState } from '../../Redux/store';
import { motion } from 'framer-motion';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './AddModal.module.css';

function AddModal() {
  const dispatch = useDispatch();
  const selectedItem = useSelector(
    (state: RootState) => state.list.selectedItem
  );
  const items = useSelector((state: RootState) => state.list.items);
  const [inputValue, setInputValue] = useState(
    selectedItem ? selectedItem.name : ''
  );
  const [days, setDays] = useState(
    selectedItem ? selectedItem.days : new Date().getDate()
  );
  const [months, setMonths] = useState(
    selectedItem ? selectedItem.months : new Date().getMonth() + 1
  );
  const [years, setYears] = useState(
    selectedItem ? selectedItem.years : new Date().getFullYear()
  );

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

  function addDay() {
    if (days < 31) {
      setDays(days + 1);
    }
    if (days === 31) {
      setDays(1);
    }
  }

  function subtractDay() {
    if (days > 1) {
      setDays(days - 1);
    } else {
      setDays(31);
    }
  }

  function addMonth() {
    if (months < 12) {
      setMonths(months + 1);
    }
    if (months === 12) {
      setMonths(1);
    }
  }

  function subtractMonth() {
    if (months > 1) {
      setMonths(months - 1);
    } else {
      setMonths(12);
    }
  }

  function addYear() {
    setYears(years + 1);
  }

  function subtractYear() {
    if (years > 2023) {
      setYears(years - 1);
    }
  }

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
      <motion.div
        className={styles.addpointmodal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.addpointmodal__header}>
          {selectedItem === null ? (
            <h3>Add roadmap point</h3>
          ) : (
            <h3>{selectedItem.name}</h3>
          )}
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
                <span>Deadline:</span>
                <div className={styles.time}>
                  <span>
                    {days < 10 ? `0${days}` : days} /{' '}
                    {months < 10 ? `0${months}` : months} / {years}
                  </span>
                </div>
              </div>
              <div className={styles.timesection__buttons}>
                <button onClick={() => subtractDay()}>-1 Day</button>
                <div>Days</div>
                <button onClick={() => addDay()}>+1 Day</button>
                <button onClick={() => subtractMonth()}>-1 Month</button>
                <div>Weeks</div>
                <button onClick={() => addMonth()}>+1 Month</button>
                <button onClick={() => subtractYear()}>-1 Year</button>
                <div>Months</div>
                <button onClick={() => addYear()}>+1 Year</button>
              </div>
            </div>
          </div>
          <button
            className={styles.confirm}
            onClick={() => {
              const trimmedInputValue = inputValue.trim();
              if (trimmedInputValue !== '') {
                if (!selectedItem) {
                  if (!items.some(item => item.name === trimmedInputValue)) {
                    dispatch(
                      addItem({
                        id: Date.now(),
                        name: trimmedInputValue,
                        finished: false,
                        days: days,
                        months: months,
                        years: years,
                      })
                    );
                    dispatch(toggleAddModal());
                    notify();
                  } else {
                    techOnList();
                  }
                } else {
                  dispatch(
                    editItem({
                      ...selectedItem,
                      name: trimmedInputValue,
                      days: days,
                      months: months,
                      years: years,
                    })
                  );
                  dispatch(toggleAddModal());
                  dispatch(toggleConfigurationModal());
                }
              }
            }}
          >
            {selectedItem === null ? (
              <span>Add roadmap point</span>
            ) : (
              <span>Edit roadmap point</span>
            )}
          </button>
        </div>
      </motion.div>
      <Backdrop />
    </>
  );
}

export default AddModal;
