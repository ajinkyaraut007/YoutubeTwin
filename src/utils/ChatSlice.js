import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatMessage: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.chatMessage.length > 15) {
        state.chatMessage.splice(-1, 2);
      }
      state.chatMessage.unshift(action.payload);
    },
  },
});
export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
