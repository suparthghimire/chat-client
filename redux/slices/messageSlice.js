import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active_message: {},
};

export const messageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setActiveMessage: (state, action) => {
      state.active_message = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveMessage } = messageSlice.actions;

export default messageSlice.reducer;
