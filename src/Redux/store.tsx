import { configureStore } from '@reduxjs/toolkit';
import addModalReducer from './AddModalSlice';
import listReducer from './MainSlice';

const store = configureStore({
  reducer: {
    addModal: addModalReducer,
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
