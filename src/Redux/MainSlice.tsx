import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ListItem {
  id: number;
  name: string;
  finished: boolean;
  days: number;
  weeks: number;
  months: number;
}

export interface ListState {
  items: ListItem[];
  selectedItem: ListItem | null;
}

const initialState: ListState = {
  items: [],
  selectedItem: null,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ListItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    editItem: (state, action: PayloadAction<ListItem>) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    clearList: state => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, editItem, clearList } = listSlice.actions;
export default listSlice.reducer;
