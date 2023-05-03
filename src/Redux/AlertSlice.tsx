import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alertModal',
  initialState: {
    alertModalMounted: false,
  },
  reducers: {
    toggleAlertModal: state => {
      state.alertModalMounted = !state.alertModalMounted;
    },
  },
});

export const { toggleAlertModal } = alertSlice.actions;
export default alertSlice.reducer;
