import { createSlice } from '@reduxjs/toolkit';

const configurationModalSlice = createSlice({
  name: 'configurationModal',
  initialState: {
    configurationModalMounted: false,
  },
  reducers: {
    toggleConfigurationModal: state => {
      state.configurationModalMounted = !state.configurationModalMounted;
    },
  },
});

export const { toggleConfigurationModal } = configurationModalSlice.actions;
export default configurationModalSlice.reducer;
