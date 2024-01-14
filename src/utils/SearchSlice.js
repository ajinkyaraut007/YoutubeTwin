import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "searchData",
  initialState: {},
  reducers: {
    setSearchState: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { setSearchState } = SearchSlice.actions;
export default SearchSlice.reducer;
