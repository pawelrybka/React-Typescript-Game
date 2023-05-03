import { createSlice } from '@reduxjs/toolkit';

const addModalSlice = createSlice({
  name: 'addModal',
  initialState: {
    addModalMounted: false,
  },
  reducers: {
    toggleAddModal: state => {
      state.addModalMounted = !state.addModalMounted;
    },
  },
});

export const { toggleAddModal } = addModalSlice.actions;
export default addModalSlice.reducer;
