import { configureStore } from '@reduxjs/toolkit';
import addModalReducer from './AddModalSlice';

const store = configureStore({
  reducer: {
    addModal: addModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
