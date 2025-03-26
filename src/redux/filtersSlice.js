import { createSlice } from "@reduxjs/toolkit";

const FiltersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = [...state.filters.name, action.payload];
    },
  },
});

export const { changeFilter } = FiltersSlice.actions;

export default FiltersSlice.reducer;
