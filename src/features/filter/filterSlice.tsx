import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  stock: false,
  categories: [],
  keyword: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggle: (state) => {
      state.stock = !state.stock;
    },
    toggleCategories: (state, action) => {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload);
      } else {
        state.categories = state.categories.filter(
          (categories) => categories !== action.payload
        );
      }
    },
    keywordSearch: (state, action) => {
      state.keyword = action.payload;
    },
  },
});
export const { toggleCategories, toggle, keywordSearch } = filterSlice.actions;
export default filterSlice.reducer;
