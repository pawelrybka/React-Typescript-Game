import { configureStore } from '@reduxjs/toolkit';
import addModalReducer from './AddModalSlice';
import alertModalReducer from './AlertSlice';
import listReducer from './MainSlice';
import configurationModalReducer from './ConfigurationModalSlice';

const store = configureStore({
  reducer: {
    addModal: addModalReducer,
    list: listReducer,
    alertModal: alertModalReducer,
    configurationModal: configurationModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
