import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: {
    hamburgerFlag: true,
    dropwDownFlag: false,
  },
  reducers: {
    toggleHamburgerState: (state) => {
      state.hamburgerFlag = !state.hamburgerFlag;
    },
    closeHamMenu: (state) => {
      state.hamburgerFlag = false;
    },
    toggleDropDownState: (state, action) => {
      state.dropwDownFlag = action.payload;
    },
  },
});

export const { toggleHamburgerState, closeHamMenu, toggleDropDownState } =
  hamburgerSlice.actions;

export default hamburgerSlice.reducer;
