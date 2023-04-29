import { createSlice } from '@reduxjs/toolkit';

const addModalSlice = createSlice({
  name: 'addModal',
  initialState: {
    mounted: false,
  },
  reducers: {
    toggleAddModal: state => {
      state.mounted = !state.mounted;
    },
  },
});

export const { toggleAddModal } = addModalSlice.actions;
export default addModalSlice.reducer;
