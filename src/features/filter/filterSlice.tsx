import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
  stock: boolean;
  categories: string[];
  keyword: string;
}

const initialState: FilterState = {
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
    toggleCategories: (state, action: PayloadAction<string>) => {
      if (!state.categories.includes(action.payload)) {
        state.categories.push(action.payload);
      } else {
        state.categories = state.categories.filter(
          (categories) => categories !== action.payload
        );
      }
    },
    keywordSearch: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
  },
});
export const { toggleCategories, toggle, keywordSearch } = filterSlice.actions;
export default filterSlice.reducer;
