import { configureStore } from "@reduxjs/toolkit";
import hamburgerReducer from "./hamburgerSlice";
import SearchReducer from "./SearchSlice";
import chatReducer from "./ChatSlice";
const appStore = configureStore({
  reducer: {
    hamburger: hamburgerReducer,
    searchData: SearchReducer,
    chat: chatReducer,
  },
});

export default appStore;
