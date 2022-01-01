import { configureStore } from "@reduxjs/toolkit";
import { messageSlice } from "./slices/messageSlice";
export const store = configureStore({
  reducer: { message: messageSlice },
});
