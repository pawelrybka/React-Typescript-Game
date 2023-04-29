import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ListState {
  items: { name: string }[];
}

const initialState: ListState = {
  items: [{ name: 'Typescript' }, { name: 'Javascript' }, { name: 'Css' }],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ name: string }>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = listSlice.actions;

export default listSlice.reducer;
