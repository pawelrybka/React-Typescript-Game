import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ListItem {
  id: number;
  name: string;
  finished: boolean;
  days: number;
  months: number;
  years: number;
}

export interface ListState {
  items: ListItem[];
  selectedItem: ListItem | null;
}

const loadState = (): ListState | undefined => {
  try {
    const serializedState = localStorage.getItem('listState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const initialState: ListState = {
  items: loadState()?.items ?? [],
  selectedItem: null,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ListItem>) => {
      state.items.push(action.payload);
      saveState(state);
    },
    removeItem: (state, action: PayloadAction<ListItem>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      saveState(state);
    },
    editItem: (state, action: PayloadAction<ListItem>) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
        saveState(state);
      }
    },
    setSelectedItem: (state, action: PayloadAction<ListItem | null>) => {
      state.selectedItem = action.payload;
      saveState(state);
    },
    clearList: state => {
      state.items = [];
      state.selectedItem = null;
      saveState(state);
    },
  },
});

const saveState = (state: ListState) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('listState', serializedState);
};

export const { addItem, removeItem, editItem, clearList, setSelectedItem } =
  listSlice.actions;
export default listSlice.reducer;
