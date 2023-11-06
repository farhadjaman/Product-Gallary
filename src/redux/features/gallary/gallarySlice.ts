import { createSlice } from '@reduxjs/toolkit';
import { initialData } from 'screens/landing/Data/initialData';

const initialState = {
  items: initialData,
};

export const gallary = createSlice({
  name: 'gallary',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    selectItems: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
    },
    deleteItems: (state) => {
      state.items = state.items.filter((item) => !item.isSelected);
    },
    deleteAllItems: (state) => {
      state.items = [];
    },
    selectAllItems: (state) => {
      state.items = state.items.map((item) => {
        item.isSelected = true;
        return item;
      });
    },
  },
});

export const { selectItems, deleteItems, setItems, deleteAllItems, selectAllItems } =
  gallary.actions;
export default gallary.reducer;
