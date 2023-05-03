import { configureStore } from '@reduxjs/toolkit';
import addModalReducer from './AddModalSlice';
import alertModalReducer from './AlertSlice';
import listReducer from './MainSlice';

const store = configureStore({
  reducer: {
    addModal: addModalReducer,
    list: listReducer,
    alertModal: alertModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
