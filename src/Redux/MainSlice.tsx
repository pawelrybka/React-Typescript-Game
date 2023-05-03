import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ListItem {
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
    clearList: state => {
      state.items = [];
    },
    setSelectedItem: (state, action: PayloadAction<ListItem>) => {
      state.selectedItem = action.payload;
    },
    updateItem: (state, action: PayloadAction<ListItem>) => {
      const index = state.items.findIndex(item => item === action.payload);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addItem, clearList, setSelectedItem, updateItem } =
  listSlice.actions;
export default listSlice.reducer;
