import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ListState {
  items: { name: string; days: number }[];
}

const initialState: ListState = {
  items: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ name: string; days: number }>) => {
      state.items.push(action.payload);
    },
    clearList: state => {
      state.items = [];
    },
  },
});

export const { addItem, clearList } = listSlice.actions;

export default listSlice.reducer;
